'use strict';

angular.module('myApp.results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'results/results.html',
    controller: 'ResultsCtrl'
  });
}])

.controller('ResultsCtrl', function($scope, $http, $rootScope) {
	activeCardInit(); // Defined in coachCruz.js
	
	var hasInteracted = $rootScope.mainCollegeList | "";

	if (!$rootScope.mainCollegeList){
		$http.get('schools.json')
			.then(function(res){
				$scope.colleges = res.data;
			});
	} else {
		$scope.colleges = $rootScope.mainCollegeList;
	}

	

	$scope.saveSelectedList = function(colleges){	
		$rootScope.mainCollegeList = colleges;
		// $http.post('schools.json', colleges).then(function(data) {
	 //      $scope.msg = 'Data saved';
	 //    });
	}

});