const util = require('util');

const LOG_NOTHING = 0;
const LOG_ERROR   = 1;
const LOG_WARNING = 2;
const LOG_INFO    = 3;
const LOG_DEBUG   = 4;

let level = LOG_NOTHING;
let program = 'node';

const log = (at, msg, args) => {
  if (level >= at) {
    const now = (new Date()).toISOString();
    console.log(util.format(`[%s] %s | ${msg}`, now, program, ...args));
  }
};

const logger = {
  as: (name) => {
    program = name;
    return logger;
  },
  show: (want) => {
    level = 0;
    switch (want) {
    case 'debug':
    case 'all':      level++;

    case 'info':     level++;

    case 'warnings':
    case 'warning':
    case 'warn':     level++;

    case 'errors':
    case 'error':
    case 'err':      level++;
    }
    return logger;
  },

  log: (msg, ...args) => {
    log(0, msg, args);
    return logger;
  },

  debug: (msg, ...args) => {
    log(LOG_DEBUG, `DEBUG | ${msg}`, args);
    return logger;
  },

  info: (msg, ...args) => {
    log(LOG_INFO, `INFO  | ${msg}`, args);
    return logger;
  },

  warn: (msg, ...args) => {
    log(LOG_WARNING, `WARN  | ${msg}`, args);
    return logger;
  },

  error: (msg, ...args) => {
    log(LOG_ERROR, `ERROR | ${msg}`, args);
    return logger;
  },
}
module.exports = logger;
