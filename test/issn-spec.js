/*jslint node: true */
'use strict';

var issn = require('../issn')
  , expect = require('expect');

describe('ISSN', function() {

  describe('verify', function() {

    describe('valid ISSN with', function() {

      it('numeric check digit.', function() {
        expect(issn('0355-4325')).toBeTruthy();
      });

      it('X check digit.', function() {
        expect(issn('0001-253X')).toBeTruthy();
      });

      it('no -.', function() {
        expect(issn('03554325')).toBeTruthy();
      });
    });

    describe('invalid ISSN with', function() {

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

  describe('format with', function() {

    describe('valid ISSN with', function() {

      it('numeric check digit.', function() {
        expect(issn.format('0355-4325')).toEqual('0355-4325');
      });

      it('X check digit.', function() {
        expect(issn.format('0001-253X')).toEqual('0001-253X');
      });

      it('lowercase x check digit.', function() {
        expect(issn.format('0001-253x')).toEqual('0001-253X');
      });

      it('no -.', function() {
        expect(issn.format('03554325')).toEqual('0355-4325');
      });
    });

    describe('invalid ISSN', function() {

      it('"1234-12340000"', function() {
        expect(issn.format('1234-12340000')).toBeFalsy();
      });
      
      it('not a string.', function() {
        expect(issn.format({greeting: 'oh hai thar!'})).toBeFalsy();
      });
      
      it('undefined', function() {
        expect(issn.format()).toBeFalsy();
      });

      it('null', function() {
        expect(issn.format(null)).toBeFalsy();
      });
    });
  });
});

