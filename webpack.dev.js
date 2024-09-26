// webpack.dev.js
const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // Enables source maps for debugging
  devServer: {
    watchFiles: ["./src/html/index.html"], // Watch for changes in all files inside src
    
  },
});
