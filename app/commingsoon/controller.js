(function(angular) {
		'use strict';
		var model = angular.module('moviesCat.commingsoon',['ngRoute']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/commingSoon',{
					controller: 'commingSoon',
					templateUrl: 'commingsoon/view.html'
				})
			}]);
		model.controller('commingSoon',['$scope',function($scope) {

			}])
	})(angular);
