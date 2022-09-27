!function (root) {

  var issn = function () {
    'use strict';

    var isIssnLax = new RegExp('^(\\d{4})-?(\\d{3})([\\dX])$', 'i');

    function validate(issn, options) {
      var opts = options ? options : { strict: false };

      var issnPattern = opts.strict === true
        ? '^(\\d{4})-(\\d{3})([\\dX])$'   // hyphen is required
        : '^(\\d{4})-?(\\d{3})([\\dX])$'; // hyphen is optional
      var isIssn = new RegExp(issnPattern);

      var matches = text(issn).match(isIssn);
      if (!matches) {
        return false;
      }

      var actualCheckDigit = matches[3];
      var expectedCheckDigit = calculateCheckDigitFor(matches[1] + matches[2]);
      return expectedCheckDigit === actualCheckDigit;
    }

    validate.format = function format(issn) {
      var matches = text(issn).match(isIssnLax);
      return matches
          ? matches[1] + '-' + matches[2] + matches[3].toUpperCase()
          : undefined;
    };

    var isDigitsForChecksum = new RegExp('^(\\d{7})$');
    validate.calculateCheckDigit = function calculateCheckDigit(digits) {
      if (!isString(digits)) {
        throw new Error('Digits must be a string of 7 numeric characters.');
      }
      if (!digits.match(isDigitsForChecksum)) {
        throw new Error('Digits are malformed; expecting 7 numeric characters.');
      }
      return calculateCheckDigitFor(digits);
    };

    function calculateCheckDigitFor(digits) {
      var result = digits.split('')
              .reverse()
              .reduce(function (sum, value, index) {
                return sum + (value * (index + 2));
              }, 0) % 11;

      var checkDigit = (result === 0) ? 0 : 11 - result;
      if (checkDigit === 10) {
        checkDigit = 'X';
      }
      return checkDigit.toString();
    }

    function text(o) {
      return isString(o) ? o : '';
    }

    function isString(o) {
      return typeof o === 'string';
    }

    return validate;
  }();

  if (typeof exports !== 'undefined') {
    if (module && typeof module.exports !== 'undefined') {
      module.exports = issn;
    }
  } else {
    root.issn = issn;
  }

}(this);
