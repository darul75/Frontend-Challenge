'use strict';

/**
 * @ngdoc directive
 * @name fecApp.directive:jobinfodetail
 * @description
 * # jobinfodetail
 */
angular.module('fecApp')
  .directive('jobinfodetail', ['fecCache', function (fecCache) {
    return {
      restrict: 'E',
      scope: {'item': '='},
      template: "<div>\
        <button ng-if='select' ng-model='content' ng-click='toggle()' class='btn btn-default'>{{content.value}}</button>\
        <button type='button' ng-if='showCamera' ng-click='setPicture()' class='btn btn-default action'><div class='camera' ><span></span></div></button>\
        <button type='button' ng-if='showLocation' ng-click='setLocation()' class='btn btn-default action'>\
          <div class='location'></div>\
          <div style='float: left;margin-left:5px'>{{jobInfo.content.address === '' && '' || jobInfo.content.address}}<div>\
        </button>\
        <button type='button' ng-if='showTime' ng-click='setTime()' class='btn btn-default action'>\
          <div class='time'></div>\
          <div style='float: left;margin-left:5px'>{{jobInfo.content.value === '' && 'no location' || jobInfo.content.value + ' minutes'}}<div>\
        </button>\
        <input type='text' ng-if='showDescription' ng-model='item.job.description' ng-changed='TODO' class='form-control' placeholder='+ description'>\
        </div>\
      " ,
      link: function postLink(scope, element, attrs) {

        // fetch current job
        try {
          scope.jobInfo = fecCache.GetJobItemInfo(scope.item.job, attrs.idx);
        }
        catch (e) {
          return;
        }

        var idx = 0;
        var isArray = angular.isArray;

        // multi values action
        scope.toggle = function() {
          angular.forEach(scope.selectValues, function(item) {
            item.selected = false;
          });

          idx = idx == scope.selectValues.length -1 ? 0 : ++idx;
          scope.jobInfo.content[idx].selected = true;
          scope.content = scope.jobInfo.content[idx];

          scope.triggerChanges();

        };

        // location: TODO map component
        scope.setLocation = function() {

          scope.jobInfo.content.lat = 51;
          scope.jobInfo.content.lng = 32;
          scope.jobInfo.content.address = '42 london street avenue';

          scope.triggerChanges();

        };

        // picture: TODO device call
        scope.setPicture = function() {

          scope.jobInfo.content.set = true;
          // path...

          scope.triggerChanges();

        };

        // location: TODO time component
        scope.setTime = function() {

          scope.jobInfo.content.value = 30;

          scope.triggerChanges();

        };

        // broadcast model update
        scope.triggerChanges = function() {
          scope.$emit('jobInfo', scope.item);
        };

        var init = function() {

          if( isArray( scope.jobInfo.content ) ) {
            scope.select = true;
            scope.selectValues = scope.jobInfo.content;
            scope.content = scope.jobInfo.content[idx];
          }
          else {
            // picture ...

            switch (scope.jobInfo.name) {
              case 'picture':
                scope.showCamera = true;
                break;
              case 'location':
                scope.showLocation = true;
                break;
              case 'description':
                scope.showDescription = true;
                break;
              case 'time':
                scope.showTime = true;
                break;
              default:
              break;
            }
          }

        }

        init();
      }
    };
  }]);
