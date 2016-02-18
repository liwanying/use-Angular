'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'moviesCat.commingsoon',
  'moviesCat.theater',
  'moviesCat.top',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/theater'});
}]);
