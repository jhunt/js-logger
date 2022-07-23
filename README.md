# js-logger

A stupidly simple, console-only logger with message timestamping,
configurable identity, and standard syslog-inspired logging
levels.

To use it, require the library and call the functions on the
exported object:

```js
const logger = require('@jhunt/logger');

logger.show('all')
      .as('an-example');

logger.debug('this is a debug message');
logger.info('this is an info message');
logger.warn('this is a warning message');
logger.error('this is an error message');
logger.info('here is an %O', {ob:'ject'});
```

The above outputs:

```
[2022-07-23T19:26:29.700Z] an-example | DEBUG | this is a debug message
[2022-07-23T19:26:29.702Z] an-example | INFO  | this is an info message
[2022-07-23T19:26:29.702Z] an-example | WARN  | this is a warning message
[2022-07-23T19:26:29.702Z] an-example | ERROR | this is an error message
[2022-07-23T19:26:29.702Z] an-example | INFO  | here is an { ob: 'ject' }
```

The log format uses `util.format()` under the hood, so you can use
standard(-ish) %-style format specifiers, like sprintf and
friends.

All methods can be chained, primarily so that you can do this:

```js
logger.show('warnings')
      .as('my-program');
```

Environmental configuration is strongly encouraged, but not
provided directly by the library.  Here's an idea to get you
started:

```js
logger.show(process.env.LOG_LEVEL)
      .as(process.env.LOG_IDENTITY);
```

You can also use the `as()` function to include build numbers and
such, probably sourced from your CI pipelines:

```js
const { version } = require('./version.json');
logger.show(process.env.LOG_LEVEL)
      .as(`my-program/${version}`);
```

Happy Hacking!
