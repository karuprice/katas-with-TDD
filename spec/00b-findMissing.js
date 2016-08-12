import { expect } from 'chai';
import findMissing from '../00b-findMissing/00b-findMissing';


describe('findMissing', function() {
  it('should be a function', function() {
    expect(findMissing).to.be.a('function');
  });
  it('shold take one argument', function(){
    expect(findMissing.length).to.equal(1)
  });
  it('returns a number', function() {
    expect(findMissing([1,2,3,4,5,6,8,9,10])).to.be.a('number')
  });
  it('returns a 7 for [1,2,3,4,5,6,8,9,10]', function() {
    expect(findMissing([1,2,3,4,5,6,8,9,10])).to.equal(7)
  });
  it('returns a 1 for [2,3,4,5,6,8,9,10]', function() {
    expect(findMissing([2,3,4,5,6,8,9,10])).to.equal(1)
  });
});


