/**
 * webpack打包配置-开发模式
 * Created by demon on 2016/9/23.
 */
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['../web/vendor.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client'],
    main: ['../web/main.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client']
  },

  output: {
    path: '/',
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
        loaders: [
          'babel',
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader',   //启用热加载
        ],
        exclude: [/node_modules\/(?!(ng2-.+))/]
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: [/app/]
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        include: [/app/]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ]
};