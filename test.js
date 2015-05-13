var expect = require('chai').expect
  , str = require('./')

describe('str', function() {
  it('should stringify number', function() {
    expect(str(5)).to.eql('5')
  })

  it('should stringify object', function() {
    expect(str({foo:'bar'})).to.eql('{"foo":"bar"}')
  })
})