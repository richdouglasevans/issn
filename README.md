[ISSN](http://www.issn.org/understanding-the-issn/what-is-an-issn/) Validation

![Build status](https://api.travis-ci.org/richdouglasevans/issn.png)

```bash
npm install @richdouglas/issn
```

```js
var issn = require('issn');
```

Validate ISSNs.

```js
issn('0355-4325'); // truthy

issn('0xDEADBEEF'); // falsy
```

Format ISSNs.

```js
issn.format('0355-4325'); // '0355-4325'
issn.format('0001253x');  // '0001-253X'

issn.format('0xDEADBEEF'); // undefined
```

* Source of valid ISSNs [used in the tests.](https://docs.google.com/spreadsheets/d/1MHjgf-slOIOFejTQh_NCl_HFLRs3UmxjFhY0pwT2K_c/edit)

### Small print

Author: Rich Douglas &copy; 2015

* [@richdevans](https://twitter.com/richdevans)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/richdouglasevans/issn/issues?state=open) on Github

## MIT License

Copyright (c) 2015 Rich Douglas

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

