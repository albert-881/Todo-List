const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true, // Enable minification
    
  },
  // You can add more production-specific configuration here
});
