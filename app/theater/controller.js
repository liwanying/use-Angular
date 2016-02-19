 (function(angular) {
		'use strict';

		var model = angular.module('moviesCat.theater',['ngRoute','movieCathttpServer']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/theater',{
					controller: 'theater',
					templateUrl: 'theater/view.html'
				})
			}]);
		model.controller('theater',['$scope','$http','httpServer',function($scope, $http,httpServer) {
			$scope.loading = true;
			httpServer.jsonp("http://api.douban.com/v2/movie/in_theaters",{},function(data){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				$scope.loading = false;
				$scope.$apply();
				})
			}])

	})(angular);
