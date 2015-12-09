var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  stats: {
    colors: true
  }
};
