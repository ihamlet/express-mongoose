//app.js文件

//1.引入express模块
const express = require('express')

// 请求中间件
var bodyParser = require('body-parser');

//2.创建app对象
const app = express()

//引入刚才定义的hero路由
const hero = require('./router/hero')

// 解析 application/json
app.use(bodyParser.json());	
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

//跨域设置
app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

// 配置api路由
app.use('/api',hero)

//定义简单路由
app.use('/',(req,res) => {
  res.send('Yo!')
})

//定义服务启动端口
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})