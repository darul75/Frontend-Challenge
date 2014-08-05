'use strict';

/**
 * @ngdoc function
 * @name fecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fecApp
 */
angular.module('fecApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
