'use strict';

/**
 * @ngdoc function
 * @name fecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fecApp
 */
angular.module('fecApp')
  .controller('MainCtrl', ['$scope', '$location', '$routeParams', '$sce', 'fecCache', function (scope, location, routeParams, sce, fecCache) {

    scope.rootItems = fecCache.GetRootItems();

    if (routeParams && routeParams.id) {
      scope.item = fecCache.GetRootItemById(routeParams.id);
      scope.json = scope.item;
      scope.itemChildren = fecCache.GetRootItemChildrenById(routeParams.id);
      if (location.path().indexOf('job') > 0) {
        scope.job = true;
      }
    }

    scope.$on('jobInfo', function(event, o) {
      scope.json = o;
    });

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
