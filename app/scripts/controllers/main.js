'use strict';

/**
 * @ngdoc function
 * @name fecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fecApp
 */
angular.module('fecApp')
  .controller('MainCtrl', ['$scope', '$location', '$routeParams', '$sce', '$compile', 'fecCache', function (scope, location, routeParams, sce, compile, fecCache) {

    scope.rootItems = fecCache.GetRootItems();

    if (routeParams && routeParams.id) {
      scope.item = fecCache.GetRootItemById(routeParams.id);
      scope.itemChildren = fecCache.GetRootItemChildrenById(routeParams.id);
      if (location.path().indexOf('job') > 0) {
        scope.itemJob = scope.item.job;
      }
    }

    scope.renderInfo = function(job, info) {
      switch (typeof info) {
        case 'string':
          return info;
        case 'number':
          return 'select';
        default:
          return '';
      }
    };

    scope.getInfoContent = function(job, num) {
      return fecCache.GetJobItemInfo(job, num);
    };

  }]);
