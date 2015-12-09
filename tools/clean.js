var del = require('del');
var fs = require('fs');

/**
 * Cleans up the output (build) directory.
 */
module.exports = function clean() {
  return new Promise(function(resolve, reject){
    del(['build/*'], { dot: true }).then(function(paths){
    	console.log('Deleted files and folders:\n', paths.join('\n'));
      resolve();
    });
  });
};
