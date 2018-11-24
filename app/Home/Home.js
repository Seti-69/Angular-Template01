'use strict';

angular.module('page.Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {
    templateUrl: 'Home/Home.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);