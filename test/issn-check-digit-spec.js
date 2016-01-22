/*jslint node: true */
'use strict';

var issn = require('../issn')
    , expect = require('expect');

describe('ISSN .calculateCheckDigit with', function () {

  it('"0000001".', function () {
    expect(issn.calculateCheckDigit('0000001')).toEqual('9');
  });

  it('"0040-4020".', function () {
    expect(issn.calculateCheckDigit('0040402')).toEqual('0');
  });

  it('undefined.', function () {
    expect(function () {
      issn.calculateCheckDigit()
    }).toThrow();
  });

  it('null.', function () {
    expect(function () {
      issn.calculateCheckDigit(null)
    }).toThrow();
  });

  it('not a string.', function () {
    expect(function () {
      issn.calculateCheckDigit({})
    }).toThrow();
  });

  it('empty string.', function () {
    expect(function () {
      issn.calculateCheckDigit('')
    }).toThrow();
  });

  it('a wholly malformed string.', function () {
    expect(function () {
      issn.calculateCheckDigit('pwnzors')
    }).toThrow();
  });

  it('malformed digits that is too short.', function () {
    expect(function () {
      issn.calculateCheckDigit('123456')
    }).toThrow();
  });

  it('malformed digits that is too long.', function () {
    expect(function () {
      issn.calculateCheckDigit('12345678')
    }).toThrow();
  });
});
