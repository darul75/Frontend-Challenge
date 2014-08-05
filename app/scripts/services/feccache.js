'use strict';

/**
 * @ngdoc service
 * @name fecApp.fecCache
 * @description
 * # fecCache
 * Factory in the fecApp.
 */
angular.module('fecApp')
  .factory('fecCache', ['$cacheFactory', function (cacheFactory) {

    var cache = cacheFactory('super-cache');

    var ROOT_KEY = 'rootItems';

    cache.put(ROOT_KEY, [
      {
        id: '1',
        label: 'Cleaning',
        children: [
          {
            id: '1',
            label: 'Cleaning Per Hour'
          },
          {
            id: '2',
            label: 'Ironing Per Hour'
          }
        ]
      },
      {
        id: '2',
        label: 'Handyman'
      },
      {
        id: '3',
        label: 'Health & Beauty'
      }

    ]);

    // Public API here
    return {
      GetRootItems: function () {
        return cache.get(ROOT_KEY);
      }
    };
  }]);
