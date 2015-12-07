module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: '../build/bundle.js'
  },
  stats: {
    colors: true
  }
};
