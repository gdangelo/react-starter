var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

/**
 * Bundles JavaScript.
 */
module.exports = function bundle() {
  return new Promise(function(resolve, reject){
    var compiler = webpack(webpackConfig);
    var callback = function(err, stats){
      if (err){
        return reject(err);
      } else {
        console.log(stats.toString(webpackConfig.stats));
        return resolve();
      }
    };

    compiler.run(callback);
  });
};
