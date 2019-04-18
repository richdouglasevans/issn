/*jslint node: true */
'use strict';

var issn = require('../issn')
    , expect = require('expect');

describe('ISSN .validate', function () {

  describe('valid ISSN with', function () {

    it('numeric check digit.', function () {
      expect(issn('0355-4325')).toBeTruthy();
    });

    it('X check digit.', function () {
      expect(issn('0001-253X')).toBeTruthy();
    });

    it('no -.', function () {
      expect(issn('03554325')).toBeTruthy();
    });
  });

  describe('invalid ISSN with', function () {

    it('"0355-4323".', function () {
      expect(issn('0355-4323')).toBeFalsy();
    });

    it('"pwnzors".', function () {
      expect(issn('pwnzors')).toBeFalsy();
    });

    it('empty string.', function () {
      expect(issn('')).toBeFalsy();
    });

    it('undefined.', function () {
      expect(issn(undefined)).toBeFalsy();
    });

    it('null.', function () {
      expect(issn(null)).toBeFalsy();
    });

    it('not a string.', function () {
      expect(issn({song: '212'})).toBeFalsy();
    });
  });
});
