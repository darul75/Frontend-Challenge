'use strict';

/**
 * @ngdoc directive
 * @name fecApp.directive:jobinfodetail
 * @description
 * # jobinfodetail
 */
angular.module('fecApp')
  .directive('jobinfodetail', function () {
    return {
      restrict: 'E',
      template: "<select ng-if='select' ng-model='name' ng-options='content.value for content in selectValues'></select>",
      link: function postLink(scope, element, attrs) {
        var o = JSON.parse(attrs.content);

        if( Object.prototype.toString.call( o.content ) === '[object Array]' ) {
          scope.select = true;
          scope.selectValues = o.content;
          scope.name = o.content[0];
        }
        else {
          // picture etc...
          switch (o.name) {
            case 'description':

          }
        }
        // var detail = fecCache.GetJobItemInfo(job, info);
        //   if (typeof detail.content === 'object') {
        //     // array
        //     var html = '';

        //     html = "<select ng-model='select"+detail.name +"' ng-options='content.value for content in detail.content'></select>";
        //     // angular.forEach(detail, function(item) {
        //     //   html += '<div>' + detail + '</div>';
        //     // });

        //     compile(html)(scope);

        //     return sce.trustAsHtml(html);
        //   }
        //   else
        //     return sce.trustAsHtml(detail);
      }
    };
  });
