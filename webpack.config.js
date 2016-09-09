var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/js/dash-tx-visualizer.js',
  output: {
    filename: 'dist/dash-tx-visualizer.min.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        loader: 'exports'
      },
      {
        test: /\.js$/,
        loader: 'imports'
      }
    ]
  }
};
