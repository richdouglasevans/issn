#!/usr/bin/env node
'use strict';

var stdin = require('get-stdin'),
    argv = require('minimist')(process.argv.slice(2)),
    pkg = require('./package.json'),
    issn = require('./'),
    input = argv._;

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Usage',
    '    issn <ISSN>',
    '',
    '  Example',
    '    issn 0000-0019',
    '    true'
  ].join('\n'));
}

function init(data) {
  console.log(issn(data));
}

if (argv.version) {
  console.log(pkg.version);
  return;
}

if (argv.help) {
  help();
  return;
}

if (process.stdin.isTTY) {
  if (input.length === 0) {
    help();
    return;
  }

  init(input[0]);

} else {
  stdin(function (data) {
    init(data.replace(/(\n|\r)+$/, ''));
  });
}
