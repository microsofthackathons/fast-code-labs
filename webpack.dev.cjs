/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.cjs');

module.exports = merge(baseConfig, {
  devServer: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
  },
});
