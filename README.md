# Angular2 种子项目
项目主要用来做其他项目的初始项目,免得以后再建立各种配置文件了...  

-----
#### 特性&TODO:  
- [x] 使用gulp做构建系统
- [x] 包含服务器代码(express+ezajax)
- [x] 构建分为 "开发" 和 "生产" 两个环境
- [x] 支持 *await/async*,感动到哭(手动哭脸)
- [x] 自动压缩js/css文件
- [x] 热替换/热更新
- [ ] 建立简单的侧边栏布局
- [ ] 包含简单的UI元素
- [x] 实现分模块延时加载

Demo启动
---
```bash
git clone https://git.danwi.me/danwi/ng2-seed.git
npm install
npm start
```

环境说明
---
#### 1. 开发环境
通过如下命令进入该模式
```bash
#持续编译
gulp build:dev

#进入构建目录
cd dist

#以开发模式启动node脚本
NODE_ENV=development node ./index.js
```
该环境将启用如下特性:  
* 监听并编译服务器代码(持续监听文件改变)
* webpack由后端服务器(express)的中间件来打包,不是gulp来打包
* 前端代码支持 *热替换*
* 自动生成sourcemap便于调试
* 后端的ezajax模块支持 *热替换*

#### 2. 生产环境
通过如下命令进入该模式
```bash
#生产编译
gulp build
#or
gulp

#进入构建目录
cd dist

#以生产模式启动node脚本
NODE_ENV=production node ./index.js
```

该环境将启用如下特性:  
* 客户端webpack由gulp来启动
* 前端资源自动压缩
* 所有的热替换被关闭
* 开启angular2的产品模式(enbaleProdMode)
