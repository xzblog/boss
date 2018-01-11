const Router = require('express').Router();
const model = require('./model');


const User = model.getModel('user');  //用户模型

//登录
Router.post('/login', function (req,res) {
    //拿到用户的用户名和密码
    const {userName, password} = req.body;
    User.findOne({
        userName,
        password
    }).then((info)=>{
        if(!info){
            res.json({
                code: 3,
                msg:'用户名或密码错误'
            });
            return false
        }
        const {userName, userType, _id} = info;
        res.json({
            code: 0,
            msg:'登录成功',
            url: '/account',
            data:  {userName, userType, _id}
        });
    })
});

// 注册
Router.post('/register', function (req,res) {

    const {phone, password, userType} = req.body;

    //1、拿到前端数据， 查询数据库，是否有重复用户
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
            password,
            userType
        });
        console.log(`user ${user}`);
        return user.save()  //return出去是让他可以用promise的形式拿保存结果
    }).then((info,err) =>{
        if(err){
            console.log(`保存失败:${err}`);
        }
        //保存成功，拿到数据库存储的信息
        const {phone, userType, _id} = info;
        res.json({
            code: 0,
            msg: '注册成功',
            url: '/account',
            data: {phone, userType, _id}
        });
    })
});

//查询用户信息
Router.get('/info',function (req,res) {
    return res.json({code:2})
});
module.exports = Router;