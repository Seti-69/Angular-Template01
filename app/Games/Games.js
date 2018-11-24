'use strict';

angular.module('page.Games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Games', {
    templateUrl: 'Games/Games.html',
    controller: 'View2Ctrl'
  });
  
}])

.controller('View2Ctrl', [function() {
	
}]);

