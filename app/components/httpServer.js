/*
* @Author: 婉君
* @Date:   2016-02-18 21:35:44
* @Last Modified by:   婉君
* @Last Modified time: 2016-02-19 22:06:43
*/

'use strict';
(function(angular) {
	var http = angular.module('movieCathttpServer',[]);
	http.service('httpServer',['$window','$document',function($window,$document) {
			this.jsonp = function(url,data,callback) {
				var randomNumber = Math.random().toString().replace('.','');
				var callbackName = 'my_json_cbname' + randomNumber;
				$window[callbackName] = callback;
				var querystring = url.indexOf('?') == -1 ? '?' : '&';
				for(var k in data) {
					querystring += k + "=" + data[k] + '&';
				}
				querystring += 'callback' + '=' +callbackName;
				var script = $document[0].createElement("script");
				script.src = url + querystring;
				$document[0].body.appendChild(script);
			}
		}])
	})(angular)
