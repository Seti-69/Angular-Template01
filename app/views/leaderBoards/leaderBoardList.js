'use strict';

angular.module('leaderBoards.leaderBoardList', ['ngAnimate'])
.controller('rankListCtrl', function($scope, $http) {
    $http.get("model/leaderBoard.json")
    .then(function(response) {
        $scope.jsonData = response.data.leaders;
    });
    
});