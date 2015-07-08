var expect = require('chai').expect
  , str = require('./')

describe('str', function() {
  it('should stringify number', function() {
    expect(str(5)).to.eql('5')
  })

  it('should stringify zero', function() {
    expect(str(0)).to.eql('0')
  })

  it('should stringify function', function() {
    expect(str(function(){ }).replace(/ /g, '')).to.eql('function(){}')
  })

  it('should stringify object', function() {
    expect(str({foo:'bar'})).to.eql('{"foo":"bar"}')
  })

  it('should return empty string for falsy', function() {
    expect(str(false)).to.eql('')
    expect(str(undefined)).to.eql('')
    expect(str(null)).to.eql('')
  })

})