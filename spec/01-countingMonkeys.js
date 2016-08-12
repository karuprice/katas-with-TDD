import { expect } from 'chai';
import countingMonkeys from '../01-countingMonkeys/02-countingMonkeys';


describe('countingMonkeys', function() {
  it('should be a function', function() {
    expect(countingMonkeys).to.be.a('function');
  });
  it('should take one argument', function(){
    expect(countingMonkeys.length).to.equal(1)
  });
  it('returns an array', function() {
    expect(countingMonkeys()).to.be.an('array')
  });
  it('returns 0,1,2,3 if 3 is passed', function() {
    expect(countingMonkeys(3)).to.eql([1,2,3])
  });
});

