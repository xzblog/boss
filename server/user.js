const Router = require('express').Router();
const model = require('./model');
const utils = require('utility');  //加密

//用户模型
const User = model.getModel('user');
//聊天模型
const Chat = model.getModel('chat');

//自定义加密方式
const encrypt = function (pwd) {
    const str = '!@#@$%&^^%&**';
    return utils.md5(utils.md5(str + pwd));
};

//查询用户信息是过滤password 和__v
const _filter = {password:0, __v:0};

//查询用户列表
Router.get('/list', function (req, res) {
    const {type} = req.query;
    User.find({
        userType: type
    },_filter).then((doc)=>{
        console.log(doc)
        res.json({
            code: 0,
            msg:'查询成功',
            data: doc
        });
    })
});

//查询消息列表
Router.get('/msglist', function (req, res) {
    const {userId} = req.cookies;
    User.find({}, function (e, userdoc) {

        let users = {};
        userdoc.forEach(v=>{
            users[v._id] = {name:v.userName, avatar:v.avatar}
        });
        Chat.find({'$or':[{from:userId},{to:userId}]},function(err,doc){
            if (!err) {
                return res.json({code:0,msg:doc, users:users})
            }
        })
    })
});

//阅读消息
Router.post('/readmsg', function(req, res){
    const userId = req.cookies.userId;
    const {from} = req.body;
    Chat.update(
        {from,to:userId},
        {'$set':{read:true}},
        {'multi':true},
        function(err,doc){
            console.log(doc)
            if (!err) {
                return res.json({code:0,num:doc.nModified})
            }
            return res.json({code:1,msg:'修改失败'})
        })
})

//完善用户信息
Router.post('/update', function (req, res) {
    const {...data} = req.body;
    const {userId} = req.cookies;
    User.findByIdAndUpdate(
        userId,
        data
    ).then((info) => {
        console.log(info);
        if(!info){
            res.json({
                code: 6,
                msg:'更新用户信息失败'
            });
            return false
        }
        const dataInfo = Object.assign({},{
            _id: info._id,
            phone: info.phone,
            userType: info.userType
        },data);
        res.json({
            code: 0,
            msg:'更新成功',
            url: info.userType === 'boss' ? '/boss' : 'genius',
            data: dataInfo
        });
    })
});


//登录
Router.post('/login', function (req,res) {
    //拿到用户的用户名和密码
    const {phone, password} = req.body;
    User.findOne({
        phone,
        password: encrypt(password)
    }, _filter).then((info)=>{
        if(!info){
            res.json({
                code: 3,
                msg:'用户名或密码错误'
            });
            return false
        }
        const { _id,} = info;
        res.cookie('userId', _id);
        res.json({
            code: 0,
            msg:'登录成功',
            data:  info
        });
    })
});


// 注册
Router.post('/register', function (req,res) {

    const {phone, password, userType} = req.body;

    //1、查重
    // 2、没有：保存用户到数据库，返回注册成功数据给前端， 有：直接返回错误信息给前端
    if(!phone || !password || !userType){
        res.json({
            code: 1,
            msg: '用户名，密码，类型不能为空'
        });
        return false;
    }
    //查询数据库用户是否存在
    User.findOne({phone}).then((info)=>{
        if(info){
            res.json({
                code: 2,
                msg: '用户名已经存在了，',
                errorPrm: 'phone'
            });
            return false;
        }
        // 保存用户信息
        const user = new User({
            phone,
            password: encrypt(password),
            userType
        });
        return user.save();  //return出去是让他可以用promise的形式拿保存结果
    }).then((info,err) =>{
        if(err){
            console.log(`保存失败:${err}`);
        }
        //保存成功，拿到数据库存储的信息
        const {phone, userType, _id} = info;
        res.cookie('userId', _id);
        res.json({
            code: 0,
            msg: '注册成功',
            data: {phone, userType, _id}
        });
    })
});

//查询是否登录
Router.get('/info',function (req,res) {
    const {userId} = req.cookies;
    if(!userId){
        return res.json({
            code:4,
            msg: '请先登录'
        })
    }
    User.findOne({_id:userId}).then((info, err)=>{
        if (err) {
            return res.json({code:5, msg:'后端出错了'})
        }
        if (info) {
            return res.json({code:0,data:info})
        }
    })
});


module.exports = Router;