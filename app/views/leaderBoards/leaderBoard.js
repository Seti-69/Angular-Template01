'use strict';

angular.module('page.logIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Leader-Boards', {
    templateUrl: 'views/leaderBoards/leaderBoard.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {

}]);

