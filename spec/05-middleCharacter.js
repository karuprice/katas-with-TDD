import { expect } from 'chai';
import middleCharacter from '../05-middleCharacter/05-middleCharacter';


describe('middleCharacter', function() {
  it('should be a function', function() {
    expect(middleCharacter).to.be.a('function');
  });
  it('should take one argument', function(){
    expect(middleCharacter.length).to.equal(1)
  });
  it('takes a string', function(){
    expect(middleCharacter('str')).to.be.a('string')
  });
  it('returns a string', function() {
    expect(middleCharacter('A')).to.equal('A')
  });
  it('returns the letter if only one is passed', function() {
    expect(middleCharacter('K')).to.equal('K')
  });
  it('returns the middle char for odd length strings', function() {
    expect(middleCharacter('Hello')).to.equal('l')
  });
  it('returns the space if middle is a spcae', function() {
  expect(middleCharacter('this kata')).to.equal(' ')
  });
  it('returns " k" when "fun kata" is passed', function() {
    expect(middleCharacter('fun kata')).to.equal(' k')
  });
});
