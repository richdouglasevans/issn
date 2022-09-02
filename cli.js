#!/usr/bin/env node
'use strict';

var stdin = require('get-stdin'),
    yargs = require('yargs'),
    { hideBin } = require('yargs/helpers'),
    issn = require('./'),
    args = yargs(hideBin(process.argv))
      .scriptName("issn")
      .option('strict', {
        alias: 's',
        type: 'boolean',
        description: 'Enable strict validation'
      })
      .usage('Validate an ISSN')
      .example([
        ['$0 0000-0019'],
        ['$0 --strict 0000-0019', 'Strict validation: the hyphen in the ISSN is required']
      ]),
    argv = args.parse(),
    input = argv._;

function init(data) {
  var isValid = issn(data, {
    strict: argv.strict === true
  });
  console.log(isValid);
}

if (process.stdin.isTTY) {
  if (input.length === 0) {
    args.help();
    process.exit(1);
  } else {
    init(input[0]);
  }
} else {
  stdin(function (data) {
    init(data.replace(/(\n|\r)+$/, ''));
  });
}
