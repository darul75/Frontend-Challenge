'use strict';

/**
 * @ngdoc overview
 * @name fecApp
 * @description
 * # fecApp
 *
 * Main module of the application.
 */
angular
  .module('fecApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    // 'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
