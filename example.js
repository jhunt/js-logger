// this is an example, for generating
// real output in the README.md file.

const logger = require('.');

logger.show('all')
      .as('an-example');

logger.debug('this is a debug message');
logger.info('this is an info message');
logger.warn('this is a warning message');
logger.error('this is an error message');
logger.info('here is an %O', {ob:'ject'});
