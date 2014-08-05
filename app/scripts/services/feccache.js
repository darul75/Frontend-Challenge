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
        parent: '',
        label: 'Cleaning',
        children: [
          {
            id: '1-1',
            parent: '1',
            label: 'Cleaning Per Hour'
          },
          {
            id: '1-2',
            parent: '1',
            label: 'Ironing Per Hour'
          }
        ]
      },
      {
        id: '2',
        parent: '',
        label: 'Handyman'
      },
      {
        id: '3',
        parent: '',
        label: 'Health & Beauty'
      }

    ]);

    // Public API here
    return {
      GetRootItems: function () {
        return cache.get(ROOT_KEY);
      },
      GetRootItemById: function (id) {
        var o = cache.get(ROOT_KEY);

        var find = undefined;
        angular.forEach(o, function(item) {
          if (item.id === id) {
            find = item;
          }
        });
        return find;
      }


    };
  }]);
