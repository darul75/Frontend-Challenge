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

    var jobInfo = ['features', 'description', 'picture', 'helpers', 'location', 'time'];

    var ROOT_KEY = 'rootItems';

    cache.put(ROOT_KEY, [
      {
        id: '1',
        parent: null,
        label: 'Cleaning'
      },
      {
        id: '1-1',
        parent: '1',
        type: 'cleaning',
        label: 'Cleaning Per Hour',
        job: {
          order: [
            'Clean my',
            0,
            1,
            2,
            'at',
            4,
            'in',
            3
          ],
          features: [{id:0, value:'flat'}, {id:1, value:'house'}],
          helpers: [{id:0, value:'I have cleaning products'}, {id:1, value: "I don't have cleaning products"}],
          description: '',
          location: {
            lat: '',
            lng: ''
          },
          picture: {
            set: false,
            path: ''
          }
        }
      },
      {
        id: '1-2',
        parent: '1',
        type: 'cleaning',
        label: 'Ironing per hour',
        job: {
          order: [
            'I need some ironing done at',
            4,
            'in',
            'TIME COMPONENT TODO',
            " it's mainly",
            0,
            1,
            2
          ],
          features: [{id:0, value:'shirts'}, {id:1, value:'bedding'}, {id:2, value:'clothing'}],
          description: '',
          location: {
            lat: '',
            lng: ''
          },
          picture: {
            set: false,
            path: ''
          }
        }
      },
      {
        id: '2',
        parent: null,
        label: 'Handyman'
      },
      {
        id: '2-1',
        parent: '2',
        type: 'cleaning',
        label: 'Handing Per Hour',
        job: {
          order: [
            'I need a handyman to help',
            0,
            1,
            2,
            'at',
            4,
            'in',
            ' TIME COMPONENT '
          ],
          features: [{id:0, value:'hang stuff'}, {id:1, value:'fit & fix'}, {id:2, value:'odd jobs'}],
          description: '',
          location: {
            lat: '',
            lng: ''
          },
          picture: {
            set: false,
            path: ''
          }
        }
      },
      {
        id: '3',
        parent: null,
        label: 'Health & Beauty'
      }
    ]);

    return {
      GetRootItems: function () {
        return cache.get(ROOT_KEY).filter(function(o) {
          return o.parent === null;
        });
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
      },
      GetRootItemChildrenById: function (parentId) {
        return cache.get(ROOT_KEY).filter(function(o) {
          return o.parent === parentId;
        });
      },
      GetJobItemInfo: function (job, num) {
        return {
          name: jobInfo[num],
          content: job[jobInfo[num]]
        };
      }


    };
  }]);
