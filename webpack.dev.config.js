const webpack = require('webpack');
const merge = require('webpack-merge');
const BaseConfig = require('./webpack.config');

const config = merge(BaseConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});

module.exports = config;
