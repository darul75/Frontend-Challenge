'use strict';

/**
 * @ngdoc function
 * @name fecApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fecApp
 */
angular.module('fecApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
