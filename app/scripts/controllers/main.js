'use strict';

/**
 * @ngdoc function
 * @name fecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fecApp
 */
angular.module('fecApp')
  .controller('MainCtrl', ['$scope', '$routeParams', 'fecCache', function (scope, routeParams, fecCache) {
    scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    scope.rootItems = fecCache.GetRootItems();

    if (routeParams && routeParams.id) {
      scope.rootItem = fecCache.GetRootItemById(routeParams.id);
    }

  }]);
