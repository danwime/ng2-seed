/**
 * 主程序
 * Created by demon on 2016/9/23.
 */
import path from 'path'
import http from 'http'
import express from 'express'
import ezajax from "ezajax";

//实例化express程序
var app = express();

//如果是开发环境的话则挂钩webpack开发服务
if (process.env.NODE_ENV === 'development') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.dev');

  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: "/bundles/",
    headers: {"X-Custom-Header": "yes"},
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
}

app.use(express.static(path.join(__dirname, 'web')));

app.use(ezajax(path.join(__dirname, 'api'), {root: 'api'}));

app.use((req, res)=> {
  res.sendFile(path.join(__dirname, 'web/index.html'));
});

var server = http.createServer(app);
server.on('error', console.error);
server.listen(3000, ()=>console.log('listening on 3000'));
