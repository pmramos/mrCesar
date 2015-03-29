'use strict';

angular.module('myApp.deadlines', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/deadlines', {
    templateUrl: 'deadlines/deadlines.html',
    controller: 'DeadlinesCtrl'
  });
}])

.controller('DeadlinesCtrl', function($scope) {

	$scope.deadlines = [
		{
			"index": 0,
			"guid": "Compton",
			"date": "Jan 4"
		},
		{
			"index": 1,
			"guid": "Marisol",
			"date": "Jan 15"
		},
		{
			"index": 2,
			"guid": "Boyle",
			"date": "Jan 27"
		}
	];
});	