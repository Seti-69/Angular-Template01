'use strict';

angular.module('page.GameTemplate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GameTemplate', {
    templateUrl: 'views/GameTemplate/GameTemplate.html',
    controller: 'View7Ctrl'
  });
}])

.controller('View7Ctrl', [function() {

}]);

