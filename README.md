[ISSN](http://www.issn.org/understanding-the-issn/what-is-an-issn/) Validation

## Usage

```js
var issn = require('issn');
```

A single function is exported which validates ISSN strings.

```js
issn('0355-4325'); // truthy

issn('0xDEADBEEF'); // falsy
```

You can also format ISSNs.

```js
issn.format('0355-4325'); // '0355-4325'
issn.format('0001253x');  // '0001-253X'

issn.format('0xDEADBEEF'); // undefined
```

* [Wikipedia.](https://en.wikipedia.org/wiki/International_Standard_Serial_Number)
* Source of valid ISSNs [used in the tests.](https://docs.google.com/spreadsheets/d/1MHjgf-slOIOFejTQh_NCl_HFLRs3UmxjFhY0pwT2K_c/edit)
