'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$rootScope', function(scope, rootScope) {
  scope.hasDeadline = false;
  if(rootScope) {
    if (rootScope.mainCollegeList) {
      scope.hasDeadline = true;
      scope.collegeDeadline = {"text": "Early Deadline 1", "date": rootScope.mainCollegeList[0]['edI']}
    } else {
      scope.hasDeadline = false;
      scope.collegeDeadline = {"text": "No deadlines coming up"}
    }
  }
}]);