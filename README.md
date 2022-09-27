[International Standard Serial Number (ISSN)](http://www.issn.org/understanding-the-issn/what-is-an-issn/) Validation

## Install

```bash
npm install issn
```

```js
const issn = require("issn");
```

## Validate ISSNs

```js
issn("0355-4325"); // true
issn("0xDEDBEEF"); // false
```

You can force strict validation: when `strict` is `true` the hyphen is required.

```js
issn("03554325"); // true; hyphen is optional by default
issn("03554325", { strict: true }); // false
```

# Format ISSNs

```js
issn.format("0355-4325"); // '0355-4325'
issn.format("0001253x"); // '0001-253X'

issn.format("0xDEDBEEF"); // undefined
```

## Calculate the check-digit

```js
issn.calculateCheckDigit("0355432"); // '5'
issn.calculateCheckDigit("0001253"); // 'X'
```

## CLI

```bash
$ issn <ISSN>
```

You can turn on _strict_ validation using the `-strict` flag:

```bash
$ issn -strict <ISSN>
```

Here's an example piping some JSON through [jq](https://stedolan.github.io/jq/).

```bash
$ echo {\"prism:pissn\": \"0000-0019\"} | jq -r '.["prism:pissn"]' | issn
true
```
