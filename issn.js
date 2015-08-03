!function() {
  'use strict';

  var issnPattern = '^(\\d{4})-?(\\d{3})([\\dX])$';
  var isIssnStrict = new RegExp(issnPattern);
  var isIssnLax = new RegExp(issnPattern, 'i');

  function verifyIssn(issn) {
    var matches = text(issn).match(isIssnStrict);
    if (!matches) {
      return false;
    }

    var result = (matches[1] + matches[2])
        .split('')
        .reverse()
        .reduce(issnSum, 0)
        % 11;

    var actualCheckDigit = matches[3];
    var expectedCheckDigit = calculateCheckDigit(result);

    return expectedCheckDigit === actualCheckDigit;
  }

  function issnSum(sum, value, index) {
    return sum + (value * (index + 2));
  }

  function calculateCheckDigit(number) {
    var checkDigit = (number === 0) ? 0 : (11 - number);
    if (checkDigit === 10) {
      checkDigit = 'X';
    }
    return checkDigit.toString();
  }

  function text(o) {
    return typeof o === 'string' ? o : '';
  }

  verifyIssn.format = function formatIssn(issn) {
    var matches = text(issn).match(isIssnLax);
    return matches
        ? matches[1] + '-' + matches[2] + matches[3].toUpperCase()
        : undefined;
  };

  if (module && typeof module.exports !== 'undefined') {
    module.exports = verifyIssn;
  }
}();
