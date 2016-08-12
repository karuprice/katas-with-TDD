/* global describe, it */

import { expect } from 'chai';
import CalculateBill from '../00-calculateBill/00-calculateBill';

describe('CalculateBill', function () {
  it('should be a function', function () {
    expect(CalculateBill).to.be.a('function');
  });
  it('Takes 3 arguemnts', function () {
  expect(CalculateBill.length).to.equal(3);
  });
  it('returns a string', function () {
    expect(CalculateBill(33.50)).to.be.a('string');
  });
  it('returns £135 for 100, 20, 15', function () {
    expect(CalculateBill(100, 20, 15)).to.equal('£135.00');
  });
  it('returns £270 for 200, 20, 15', function () {
    expect(CalculateBill(200, 20, 15)).to.equal('£270.00');
  });
  it('converts strings into numbers', function () {
    expect(CalculateBill('100', '20', '15')).to.equal('£135.00');
  });
});
