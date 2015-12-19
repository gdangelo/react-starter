import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

/**
 * Launches Webpack dev server.
 */
async function server() {
  await new Promise((resolve, reject) => {
    new WebpackDevServer(webpack(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      hot: true
    }).listen(3000, 'localhost', (err, result) => {
      if (err){
        console.log(err);
        reject(err);
      }
      console.log("Listening at localhost:3000");
      resolve();
    });
  });
};

export default server;
