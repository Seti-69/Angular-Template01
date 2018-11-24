'use strict';

angular.module('page.logIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logIn', {
    templateUrl: 'logIn/logIn.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

