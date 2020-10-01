'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export sbercoincore-lib', function() {
    var sbercoincore = require('../');
    should.exist(sbercoincore.lib);
    should.exist(sbercoincore.lib.Transaction);
    should.exist(sbercoincore.lib.Block);
  });
});
