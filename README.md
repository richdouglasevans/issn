[International Standard Serial Number (ISSN)](http://www.issn.org/understanding-the-issn/what-is-an-issn/) Validation

[![Build status](https://api.travis-ci.org/richdouglasevans/issn.png) ](https://travis-ci.org/richdouglasevans/issn)

[![NPM](https://nodei.co/npm/issn.png?compact=true)](https://nodei.co/npm/issn/)

```bash
npm install issn
```
```js
var issn = require('issn');
```

Validate ISSNs.

```js
issn('0355-4325'); // true
issn('0xDEDBEEF'); // false
```

Format ISSNs.

```js
issn.format('0355-4325'); // '0355-4325'
issn.format('0001253x');  // '0001-253X'

issn.format('0xDEDBEEF'); // undefined
```

Calculate the check-digit.

```js
issn.calculateCheckDigit('0355432'); // '5'
issn.calculateCheckDigit('0001253'); // 'X'
```

## CLI

```bash
$ issn <ISSN>
```

Here's an example piping output from [jq](https://stedolan.github.io/jq/).

```bash
echo {\"prism:pissn\": \"0000-0019\"} | jq -r '.["prism:pissn"]' | issn
true
```

If you find any problems with this module, [tweet](https://twitter.com/richdevans) or
[open an issue](https://github.com/richdouglasevans/issn/issues?state=open).
