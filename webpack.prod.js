/**
 * webpack打包配置-生产模式
 * Created by demon on 2016/9/23.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = merge.smart(common, {
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      })
    ]
  }
);
