var _ = require('underscore');
var cards = require('./cards.js');

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


function getDeck() {
  return cards.getDeck();
}

function removeFromArray(array, item) {
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
    return { id: game.id, name: game.name, players: game.players.length, hostId: game.hostId };
  });
}

function addGame(game) {
  game.players = [];
  game.spectators = [];
  game.history = [];
  game.isOver = false;
  game.winnerId = null;
  game.winningCards = null;
  game.isStarted = false;
  game.deck = getDeck();
  game.currentBlackCard = "";
  game.isReadyForScoring = false;
  game.isReadyForReview = false;
  game.pointsToWin = 5;
  gameList.push(game);
  return game;
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
}

function roundEnded(game) {
  game.winnerId = null;
  game.winningCards = null;
  game.isReadyForScoring = false;
  game.isReadyForReview = false;

  setCurrentBlackCard(game);

  _.each(game.players, function(player) {
    if(!player.isCzar) {
      removeFromArray(player.cards, player.selectedWhiteCards);
      drawWhiteCard(game, player);
    }

    player.isReady = false;
    player.selectedWhiteCards = [];
  });

  game.players[game.roundCounter % game.players.length ].isCzar = false;
  game.players[(game.roundCounter + 1) % game.players.length].isCzar = true;
  game.players[(game.roundCounter + 1) % game.players.length].isReady = false;

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
  var index =  0;//Math.floor(Math.random() * game.deck.black.length);
  game.currentBlackCard = (game.deck.black[index].q !== undefined) ? game.deck.black[index].q : game.deck.black[index];
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
  player.isReady = false;

  var readyPlayers = _.filter(game.players, function (x) {
    return x.selectedWhiteCards.length === game.currentBlackCardPick ;
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
exports.getDeck = getDeck;
