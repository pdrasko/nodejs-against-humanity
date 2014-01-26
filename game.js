var _ = require('underscore');

var WhiteCard = require('./models/WhiteCard.js');
var BlackCard = require('./models/BlackCard.js');
var gameList = [];

Array.prototype.compare = function(arr) {
    if (this.length != arr.length) return false;
    for (var i = 0; i < arr.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(arr[i])) return false;
        }
        if (this[i] !== arr[i]) return false;
    }
    return true;
}

function removeFromArray(array, obj) {
  if(typeof obj === "object"){
    for(var i = 0; i < obj.length; i ++ ){
      removeFromArrayItem(array, obj[i]);
    }
  } else {
    removeFromArrayItem(array, obj);
  }
}
function removeFromArrayItem(array, item){
  var index = array.indexOf(item);
  if(index !== -1) {
    array.splice(index, 1);
  }
}

function list() {
  return toInfo(gameList);
}

function listAll() {
  return toInfo(gameList);
}

function toInfo(fullGameList) {
  return _.map(fullGameList, function(game) {
    return { id: game.id, name: game.name, isStarted: game.isStarted , players: game.players.length, hostId: game.hostId };
  });
}

function addGame(game , callback) {
  game.players = [];
  game.spectators = [];
  game.history = [];
  game.isOver = false;
  game.winnerId = null;
  game.winningCards = null;
  game.isStarted = false;
  game.deck = {black: [], white: []};
  game.currentBlackCard = "";
  game.isReadyForScoring = false;
  game.isReadyForReview = false;
  game.pointsToWin = 5;
  game.roundCounter = 0;
  gameList.push(game);
  WhiteCard.find({}, function(err, data) {
          if (err) {
            console.log(err);
            return next(err);
          }
          game.deck.white = data;
          if( game.deck.black.length > 0){
            callback(game);  
          }  
  });
  BlackCard.find({}, function(err, data) {
          if (err) {
            console.log(err);
            return next(err);
          }
          game.deck.black = data;
          if( game.deck.white.length > 0){
            callback(game);  
          }  
  });
  var callbackBlackFn = function(game, callback){
      console.log('AAA');
      return function(err, data){
          if (err){
              console.log('error occured');
              return;
          }
          console.log('AAA1');
          console.log(data);
          game.deck.black = data;
          console.log(game.deck.white.length);
          if( game.deck.white.length > 0){
            console.log('AAA2');
            callback(game);  
          }
      }
  }
  BlackCard.find({}, 'question pick draw', callbackBlackFn(game, callback));
}

function getGame(gameId) {
    return _.find(gameList, function(x) { return x.id === gameId; }) || undefined;
}
function spectateGame(game, player) {
    var joiningPlayer = {
    id: player.id,
    isReady: false,
    isSpectator: false,
    cards : [],
    selectedWhiteCards: [],
    awesomePoints: 0,
    isCzar: false,
    isSpectator: true
    };
    game.spectators.push(joiningPlayer);

    return game;
}
function joinGame(game, player) {
    var joiningPlayer = {
    id: player.id,
    name: player.name,
    isReady: false,
    isSpectator: false,
    cards : [],
    selectedWhiteCards: [],
    awesomePoints: 0,
    isCzar: false
    };

    for(var i = 0; i < 7; i++) {
        drawWhiteCard(game, joiningPlayer);
    }

    game.players.push(joiningPlayer);

    if(game.isStarted){
        //someone may have dropped and rejoined. If it was the Czar, we need to re-elect the re-joining player
        var currentCzar = _.find(game.players, function(p) {
            return p.isCzar == true;
        });
        if(!currentCzar){
            game.players[game.players.length - 1].isCzar = true;
        }
    }

    return game;
}

function departGame(gameId, playerId) {
    var game = getGame(gameId);
    if(game){
        console.info('depart game: ' + game.name);
        var departingPlayer = _.find(game.players, function(p){
            return p.id === playerId;
        });
        removeFromArray(game.players, departingPlayer);
        if(game.players.length === 0){
            //kill the game
            removeFromArray(gameList, game);
        } else {
          game.hostId = game.players[0].id;
        }
    }
}

function startGame(game) {
  game.isStarted = true;
  game.roundCounter = 1;
  setCurrentBlackCard(game);
  game.players[0].isCzar = true;
  if(game.currentBlackCardDraw > 1){
    _.each(game.players, function(player) {
      var count = 1;
      while(!player.isCzar && count < game.currentBlackCardDraw ) {
        drawWhiteCard(game, player);
        count++;
      }
    });
  }
}

function roundEnded(game) {
  game.winnerId = null;
  game.winningCards = null;
  game.isReadyForScoring = false;
  game.isReadyForReview = false;

  setCurrentBlackCard(game);

  _.each(game.players, function(player) {
    var count = 0;
    while(!player.isCzar && count < game.currentBlackCardDraw ) {
      removeFromArray(player.cards, player.selectedWhiteCards);
      drawWhiteCard(game, player);
      count++;
    }

    player.isReady = false;
    player.selectedWhiteCards = [];
  });

  game.players[(game.roundCounter - 1) % game.players.length ].isCzar = false;
  game.players[(game.roundCounter ) % game.players.length].isCzar = true;
  game.players[(game.roundCounter ) % game.players.length].isReady = false;

  game.roundCounter += game.roundCounter;

  if(game.isOver){
      _.map(game.players, function(p) {
          p.awesomePoints = 0;
      });
      game.isOver = false;
  }
}

function drawWhiteCard(game, player) {
  var whiteIndex = Math.floor(Math.random() * game.deck.white.length);
  player.cards.push(game.deck.white[whiteIndex]);
  game.deck.white.splice(whiteIndex, 1);
}

function setCurrentBlackCard(game) {
  var index =  Math.floor(Math.random() * game.deck.black.length);
  game.currentBlackCard = (game.deck.black[index].question !== undefined) ? game.deck.black[index].question : game.deck.black[index];
  game.currentBlackCardDraw = (game.deck.black[index].draw !== undefined) ? game.deck.black[index].draw : 1;
  game.currentBlackCardPick = (game.deck.black[index].pick !== undefined) ? game.deck.black[index].pick : 1;
  game.deck.black.splice(index, 1);
}

function getPlayer(gameId, playerId) {
  var game = getGame(gameId);
  return _.find(game.players, function(x) { return x.id === playerId; });
}

function getPlayerByCards(gameId, cards) {
  var game = getGame(gameId);
  return _.find(game.players, function(player){ return player.selectedWhiteCards.compare(cards); });
}

function readyForNextRound(gameId, playerId) {
  var player = getPlayer(gameId, playerId);
  player.isReady = true;

  var game = getGame(gameId);
  var allReady = _.every(game.players, function(x) {
    return x.isReady;
  });

  if(allReady) {
    roundEnded(game);
  }
}

function selectCard(gameId, playerId, whiteCardId) {
  var player = getPlayer(gameId, playerId);
  var game = getGame(gameId);
  player.selectedWhiteCards.push(whiteCardId);
  player.isReady = (player.selectedWhiteCards.length >= game.currentBlackCardPick) ? true : false;
  var readyPlayers = _.filter(game.players, function (x) {
    return x.selectedWhiteCards.length >= game.currentBlackCardPick ;
  });
  if(readyPlayers.length === game.players.length - 1) {
    game.isReadyForScoring = true;
  }
}

function selectWinner(gameId, cards) {
  var player = getPlayerByCards(gameId, cards);
  var game = getGame(gameId);
  game.winningCards = cards;
  game.isReadyForReview = true;
  player.awesomePoints = player.awesomePoints + 1;
  game.history.push({ black: game.currentBlackCard, white: cards, winner: player.name });
  if(player.awesomePoints === game.pointsToWin) {
    game = getGame(gameId);
    game.isOver = true;
    game.winnerId = player.id;
  }
}

function reset(){
  gameList = [];
}

exports.list = list;
exports.listAll = listAll;
exports.startGame = startGame;
exports.addGame = addGame;
exports.getGame = getGame;
exports.getPlayer = getPlayer;
exports.joinGame = joinGame;
exports.spectateGame = spectateGame;
exports.departGame = departGame;
exports.readyForNextRound = readyForNextRound;
exports.reset = reset;
exports.roundEnded = roundEnded;
exports.selectCard = selectCard;
exports.selectWinner = selectWinner;
exports.removeFromArray = removeFromArray;
