/*jslint node: true */
'use strict';

var issn = require('../issn')
    , expect = require('expect');

describe('ISSN .format', function () {

  describe('valid ISSN with', function () {

    it('numeric check digit.', function () {
      expect(issn.format('0355-4325')).toEqual('0355-4325');
    });

    it('X check digit.', function () {
      expect(issn.format('0001-253X')).toEqual('0001-253X');
    });

    it('lowercase x check digit.', function () {
      expect(issn.format('0001-253x')).toEqual('0001-253X');
    });

    it('no -.', function () {
      expect(issn.format('03554325')).toEqual('0355-4325');
    });
  });

  describe('invalid ISSN with', function () {

    it('"1234-12340000"', function () {
      expect(issn.format('1234-12340000')).toBeFalsy();
    });

    it('not a string.', function () {
      expect(issn.format({greeting: 'oh hai thar!'})).toBeFalsy();
    });

    it('undefined', function () {
      expect(issn.format()).toBeFalsy();
    });

    it('null', function () {
      expect(issn.format(null)).toBeFalsy();
    });
  });
});
