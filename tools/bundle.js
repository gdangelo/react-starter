import webpack from 'webpack';
import webpackConfig from './webpack.config';

/**
 * Bundles JavaScript.
 */
function bundle() {
  return new Promise((resolve, reject) => {
    let compiler = webpack(webpackConfig);
    compiler.run((err, stats) => {
      if (err){
        reject(err);
      }
      console.log(stats.toString(webpackConfig.stats));
      resolve();
    });
  });
};

export default bundle;
