(function(angular) {
		'use strict';
		var model = angular.module('moviesCat.theater',['ngRoute']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/theater',{
					controller: 'theater',
					templateUrl: 'theater/view.html'
				})
			}]);
		model.controller('theater',['$scope',function($scope) {

			}])
	})(angular);
