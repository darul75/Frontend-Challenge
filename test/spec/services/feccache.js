'use strict';

describe('Service: fecCache', function () {

  // load the service's module
  beforeEach(module('fecApp'));

  // instantiate service
  var fecCache;
  beforeEach(inject(function (_fecCache_) {
    fecCache = _fecCache_;
  }));

  it('should do something', function () {
    expect(!!fecCache).toBe(true);
  });

  it('should return root items', function () {
    // TODO
    expect(!!fecCache).toBe(true);
  });

});
