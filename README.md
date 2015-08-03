[ISSN](http://www.issn.org/understanding-the-issn/what-is-an-issn/) Validation

![Build status](https://api.travis-ci.org/richdouglasevans/issn.png)

[![NPM](https://nodei.co/npm/issn.png?compact=true)](https://nodei.co/npm/issn/)

```bash
npm install issn
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

If you find any problems with this module, [tweet](https://twitter.com/richdevans) or
[open an issue](https://github.com/richdouglasevans/issn/issues?state=open).

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

