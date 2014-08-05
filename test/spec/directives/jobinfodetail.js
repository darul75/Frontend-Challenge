'use strict';

describe('Directive: jobinfodetail', function () {

  // load the directive's module
  beforeEach(module('fecApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jobinfodetail></jobinfodetail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jobinfodetail directive');
  }));
});
