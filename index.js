var util = require('util');

function log() {
  console.log.apply(console, arguments);
};

module.exports = log;

log.dump = function dump(value, depth) {
  console.log(util.inspect(value, {
    colors: true,
    depth: depth || 4
  }));
};

log.info = function info() {
  var value = util.format.apply(util, arguments);
  console.log('\u001b[32m' + value + '\u001b[39m');
};

log.warn = function warn() {
  var value = util.format.apply(util, arguments);
  console.log('\u001b[33m' + value + '\u001b[39m');
};

log.error = function error() {
  var value = util.format.apply(util, arguments);
  console.log('\u001b[31m' + value + '\u001b[39m');
};

