const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const Chat = require('./model').getModel('chat');

const User =require('./user');

//创建app应用
const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

//建立连接
io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('message', function(data){
        console.log(data);
        const {from, to, cont} = data;
        const chatId = [from,to].sort().join('_');  //产生唯一的id
        Chat.create({chatId, from, to, cont},function (err,data) {
            console.log(data);
            io.emit('replyMsg', data);
        });
    });
});


//设置post请求
app.use(bodyParser.json());

//设置cookie
app.use(cookieParser());


// 用户信息路由
app.use('/user',User);

app.get('/', function (req, res) {
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
http.listen(9093, function(){
    console.log('server listening on *:9093');
});