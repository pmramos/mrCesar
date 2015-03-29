'use strict';

angular.module('myApp.profileBuilder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profileBuilder', {
    templateUrl: 'profileBuilder/profileBuilder.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', [function() {

}]);
