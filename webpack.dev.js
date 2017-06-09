/**
 * webpack打包配置-开发模式
 * Created by demon on 2016/9/23.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = merge.smart(common, {
    watch: true,
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"development"'
        }
      })
    ]
  }
);