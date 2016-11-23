var path = require('path');
var webpack = require('webpack');

var prodConfig = require('./webpack.prod.config.js');

Object.assign(prodConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
})

module.exports = prodConfig;
