/**
 * webpack公用配置
 * Created by demon on 2017/6/9.
 */
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './web/main.ts'
  },

  output: {
    publicPath: './bundles/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.css']
  },

  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "plugins": [
                "transform-regenerator",
                "transform-runtime",
              ],
              "presets": [
                "es2015"
              ]
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: {silent: true}
          },
          'angular2-template-loader',
          'angular2-load-children-loader',
        ],
        exclude: [/node_modules/]
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: [/web/]
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        include: [/web/]
      }
    ]
  }
};
