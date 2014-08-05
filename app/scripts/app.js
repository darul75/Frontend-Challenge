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
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/item/:id', {
        templateUrl: 'item.html',
        controller: 'MainCtrl'
      })
      .when('/item/:id/job', {
        templateUrl: 'job.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
