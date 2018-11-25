'use strict';

angular.module('page.logIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logIn', {
    templateUrl: 'views/logIn/logIn.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

}]);

