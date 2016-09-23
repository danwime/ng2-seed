/**
 * WebPack Config
 * Created by demon on 2016/9/23.
 */
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: './web/vendor.ts',
    main: './web/main.ts'
  },

  output: {
    publicPath: '/bundles/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['babel', 'awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/node_modules\/(?!(ng2-.+))/]
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false}
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
};