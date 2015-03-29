'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.results',
  'myApp.home',
  'myApp.profileBuilder',
  'myApp.deadlines',
  'myApp.selectedList',
  'myApp.version',
  'myApp.homePanel',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  // $routeProvider.otherwise({redirectTo: '/results'});
}]);
