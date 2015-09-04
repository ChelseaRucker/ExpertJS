var should = require('chai').should();

describe('Mocha + Chai', function () {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});
