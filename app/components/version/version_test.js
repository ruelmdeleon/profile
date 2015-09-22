'use strict';

describe('profileApp.version module', function() {
  beforeEach(module('profileApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
