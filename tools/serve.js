var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

/**
 * Launches Webpack dev server.
 */
module.exports = function server(){
  return new Promise(function(resolve, reject){
    new WebpackDevServer(webpack(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      hot: true
    }).listen(3000, 'localhost', function(err, result){
      if (err){
        console.log(err);
        reject(err);
      }

      console.log("Listening at localhost:3000");
      resolve();
    });
  });
};
