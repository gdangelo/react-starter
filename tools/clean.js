var del = require('del');
var fs = require('fs');

/**
 * Cleans up the output (build) directory.
 */
module.exports = function clean() {
  return del(['build/*'], { dot: true });
};
