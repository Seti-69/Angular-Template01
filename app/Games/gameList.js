'use strict';

angular.module('Games.gameList', [])
.controller('gameListCtrl', function($scope, $http) {
    $http.get("js/jsonTest.json")
    .then(function(response) {
        $scope.jsonData = response.data.records;
    });
});