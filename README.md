Dev log
=======

Missed console.log functionality

Installation
------------

```
npm install dev-log
```

Usage
-----

```js
var log = require('dev-log');

log('Hello, world!');
log.dump({
  foo: 'bar',
  bar: {
    baz: 'foo'
  }
});
log.info('Success!');
log.warn('Attention!');
log.info('Oops, something going wrong!');
```

License
-------
