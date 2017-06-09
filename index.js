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

app.use(express.static(path.join(__dirname, 'web')));

app.use(ezajax(path.join(__dirname, 'api'), {root: 'api'}));

app.use((req, res)=> {
  res.sendFile(path.join(__dirname, 'web/index.html'));
});

var server = http.createServer(app);
server.on('error', console.error);
server.listen(3000, ()=>console.log('listening on 3000'));
