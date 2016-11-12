var path = require('path');
var webpack = require('webpack');

var prodConfig = require('./webpack.prod.config.js');

Object.assign(prodConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
})

module.exports = prodConfig;
