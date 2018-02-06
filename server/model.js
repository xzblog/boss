const mongoose = require('mongoose');


// 创建schema,并用model导出模型

const models = {
    //用户表
    user:{
        // 手机号
        phone: {
            type: String,
            require: true
        },
        // 密码
        password: {
            type: String,
            require: true,
        },
        // 用户类型
        userType: {
            type: String,
            require: true,
        },
        // 真实姓名
        userName: {
            type: String,
        },
        //头像
        avatar: {
            type: String,
            default:'pig'
        },

        // boss专属
        // 公司
        company: {
            type: String,
        },
        // 职位
        profession: {
            type: String,
        },
        // 邮箱
        email: {
            type: String
        },

        // 个人专属
        // 性别
        sex: {
            type: String,
        },
        //工作时长
        workDate: {
            type: Array,
        },
        //出生年月
        birth: {
            type: Array,
        },
        //个人简介
        desc: {
            type: String,
        }
    },

    // 聊天表
    chat: {
        //聊天的id
        chatId: {
            type: String,
            require: true,
        },
        //谁发的
        from: {
            type: String,
            require: true,
        },
        //发给谁
        to: {
            type: String,
            require: true,
        },
        // 聊天内容
        cont: {
            type: String,
            require: true,
        },
        //是否查看
        read: {
            type:Boolean,
            default: false,
        },
        //创建时间
        create_time: {
            type: Number,
            default: Date.now(),
        },
    }
};

 for(let m in models){
     mongoose.model(m, new mongoose.Schema(models[m]));
 }


 module.exports = {
     getModel: function (name) {
         return mongoose.model(name);
     }
 }