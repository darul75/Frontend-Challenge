'use strict';

/**
 * @ngdoc directive
 * @name fecApp.directive:breadcrumb
 * @description
 * # breadcrumb
 */
angular.module('fecApp')
  .directive('breadcrumb', ['$rootScope', '$location', function (rootScope, location) {
    return {
      template: "<ul class='nav nav-pills pull-left'>\
                  <li><a href='#' ng-click='back()'><span class='glyphicon glyphicon-chevron-left'></span></a></li>\
                  <li><h3 ng-bind='title'></h3></li>\
                </ul>",
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {

        var history = [];

        rootScope.$on( "$routeChangeStart", function(event, next, current) {

          history.push(location.$$path);

          // TODO item and job category title
          // in the meantime..
          scope.job = location.path().indexOf('job') > 0;


          scope.title = scope.job ? 'What do you need ?' : 'BIZZBY';

          rootScope.back = function () {
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            console.log('TODO: fix it');
            location.path(prevUrl);
          };

        });
      }
    };
  }]);
