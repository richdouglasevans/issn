module.exports = function() {
  return {
    files: [
      'issn.js'
    ],
    tests: [
      'test/*-spec.js'
    ],
    debug: true,
    env: {
      type: 'node'
    }
  };
};
