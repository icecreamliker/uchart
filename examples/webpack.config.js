var path = require('path');

module.exports = {
  context: __dirname,

  entry: {
    output: './demo.js',
    output2: './demo2.js'
  },

  output: {
    path: './',
    filename: '[name].js',
    chunkFilename: '[id].bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js(.*)$/,
      exclude: /node_modules|moment/,
      loader: 'babel',
      query: {
        cacheDirectory: process.env.NODE_ENV !== 'production'
      }
    }]
  },

  resolve: {
    extensions: ['', '.jsx', '.js'],
    root: path.resolve('./')
  },

  watch: true,
  keepAlive: true,
  devtool: 'source-map',
  debug: true
};
