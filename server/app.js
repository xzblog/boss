const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User =require('./user');

//创建app应用
const app = express();

//设置post请求
app.use(bodyParser.json());

// 用户信息路由
app.use('/user',User);

app.get('/api/', function (req, res) {
    res.send('Hello World!');
});

//连接数据库
mongoose.connect('mongodb://localhost/boos', { useMongoClient: true },function (err) {
    if(err){
        console.log(err);
        console.log('数据库连接出错！');
    }else {
        console.log('数据库连接成功！');
    }
});

// 设置promise
mongoose.Promise = global.Promise;

//开启后台服务
const server = app.listen(9093, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});