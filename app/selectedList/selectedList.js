'use strict';

angular.module('myApp.selectedList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectedList', {
    templateUrl: 'selectedList/selectedList.html',
    controller: 'SelectedListCtrl'
  });
}])

.controller('SelectedListCtrl', function($scope, $http, $rootScope) {
});