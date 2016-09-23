Angular2 种子项目
---
项目主要用来做其他项目的初始项目,免得以后再建立各种配置文件了...  


目前包含如下特性:  
- 使用gulp做构建系统
- 包含服务器代码(express+ezajax)
- 构建分为 "开发" 和 "生产" 两个环境
- 支持 *await/async*,感动到哭(手动哭脸)

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
1. 监听并编译服务器代码(持续监听文件改变)
2. webpack由后端服务器(express)的中间件来打包,不是gulp来打包
3. 前端代码支持 *热替换*
4. 自动生成sourcemap便于调试
5. 后端的ezajax模块支持 *热替换*

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
1. 客户端webpack由gulp来启动
2. 前端资源自动压缩
3. 所有的热替换被关闭
4. 开启angular2的产品模式(enbaleProdMode)