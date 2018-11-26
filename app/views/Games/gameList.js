'use strict';

angular.module('Games.gameList', ['ngAnimate'])
.controller('gameListCtrl', function($scope, $http) {
    $http.get("model/games.json")
    .then(function(response) {
        $scope.jsonData = response.data.records;
    });
    
});