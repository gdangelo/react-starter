var del = require('del');
var fs = require('fs');

/**
 * Cleans up the output (build) directory.
 */
(function clean() {
  del(['build/*'], { dot: true });
})();
