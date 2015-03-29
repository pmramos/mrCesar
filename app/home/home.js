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
      var firstCollege = rootScope.mainCollegeList[0];
      scope.hasDeadline = true;
      scope.collegeDeadline = {"text": "Early Deadline 1", "school": firstCollege.name, "date": firstCollege.edI}
    } else {
      scope.hasDeadline = false;
      scope.collegeDeadline = {"text": "No deadlines coming up"}
    }
  }
}]);