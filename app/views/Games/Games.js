'use strict';

angular.module('page.Games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Games', {
    templateUrl: 'views/Games/Games.html',
    controller: 'storeData'
  });
  
}])

.controller('storeData', [function() {
	
}]);

