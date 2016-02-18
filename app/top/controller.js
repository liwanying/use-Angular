(function(angular) {
		'use strict';
		var model = angular.module('moviesCat.top',['ngRoute']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/top',{
					controller: 'top',
					templateUrl: 'top/view.html'
				})
			}]);
		model.controller('top',['$scope',function($scope) {

			}])
	})(angular);
