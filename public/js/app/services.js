'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'Jan-9-2014')
    .factory('GameService', function($http) {

        var s4 = function() {
            return Math.floor(Math.random() * 0x10000).toString();
        }
        var guid = function(){
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
        };
        var pId = guid();

        return {
            playerName: '',
            playerId : pId,
            newGameId : guid(),
            currentGameId: undefined,
            initName: function() {
                if(this.playerName.length === 0) {
                    this.playerName = 'anonymous ' + s4();
                }
            },
            getGames: function() {
                return $http.get('/listall');
            },
            startGame: function(gameId) {
                return $http.post('/startgame', { gameId: gameId });
            },
            createGame: function() {
                return $http.post('/add', { id: guid(), name: this.playerName + "'s game", hostId: this.playerId });
            },
            spectateGame: function(gameId, playerId) {
                return $http.post("/spectategame", { gameId: gameId, playerId: playerId});
            },
            joinGame: function(gameId, playerId, name) {
                return $http.post("/joingame", { gameId: gameId, playerId: playerId, playerName: name });
            },
            departGame: function(gameId, playerId) {
                $http.post('/departgame', { gameId: gameId, playerId: playerId});
            },
            selectCard: function(gameId, playerId, selectedCard){
                $http.post("/selectCard", { gameId: gameId, playerId: playerId, whiteCardId: selectedCard });
            },
            selectWinner: function(gameId, selectedCards) {
                $http.post("/selectWinner", { gameId: gameId, cards: selectedCards });
            },
            readyForNextRound: function(gameId, playerId) {
                $http.post("readyForNextRound",  { playerId: playerId, gameId: gameId });
            }
        }
    });
