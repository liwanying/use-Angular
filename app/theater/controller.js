 (function(angular) {
		'use strict';

		var model = angular.module('moviesCat.theater',['ngRoute','movieCathttpServer']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/:catagory/:page',{
					controller: 'theater',
					templateUrl: 'theater/view.html'
				})
			}]);
		model.controller('theater',[
			'$scope',
			'$route',
			'$routeParams',
			'httpServer',
			function($scope,$route,$routeParams,httpServer) {
			$scope.loading = true;
			var count = 10;
			var page = parseInt($routeParams.page);
			var start = (page-1)*count;
			$scope.currentPage = page;
			httpServer.jsonp("http://api.douban.com/v2/movie/"+$routeParams.catagory,
				{start:start,count:count,q:$routeParams.q},
				function(data){
					$scope.id= data.id;
					$scope.title = data.title;
					$scope.total = data.total;
					$scope.totalPage = Math.ceil($scope.total/count);
					$scope.subjects = data.subjects;
					$scope.loading = false;
					$scope.$apply();
				});
			$scope.go = function(page) {
				$route.updateParams({page : page});
			}
			}])

	})(angular);
