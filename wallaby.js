module.exports = function(wallaby) {
  return {
    files: [
      'issn.js'
    ],
    tests: [
      'test/*-spec.js'
    ],
    env: {
      type: 'node'
    }
  };
};
