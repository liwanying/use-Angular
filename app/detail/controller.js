/*
* @Author: 'wanying'
* @Date:   2016-02-24 20:03:07
* @Last Modified by:   'wanying'
* @Last Modified time: 2016-02-24 20:53:40
*/

'use strict';
 (function(angular) {
		'use strict';

		var model = angular.module('moviesCat.detail',['ngRoute','movieCathttpServer']);
		model.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/detail/:id',{
					controller: 'detail',
					templateUrl: 'detail/view.html'
				})
			}]);
		model.controller('detail',[
			'$scope',
			'$route',
			'$routeParams',
			'httpServer',
			function($scope,$route,$routeParams,httpServer) {
				httpServer.jsonp("http://api.douban.com/v2/movie/subject/"+$routeParams.id,
				{},
				function(data){
					$scope.movie=data;
					$scope.loading = false;
					$scope.$apply();
				});
			}])

	})(angular);
