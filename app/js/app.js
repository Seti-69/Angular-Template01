'use strict';

// Declare app level module which depends on views, and core components
angular.module('template_ajs01', [
  'ngRoute',
  'txtData',
  'VideoCntrl',
  'page.Home',
  'page.Games',
  'page.logIn',
  'page.leaderBoard',
  'Games.gameList',
  'myApp.version',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
