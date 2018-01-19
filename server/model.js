const mongoose = require('mongoose');


// 创建schema,并用model导出模型

const models = {
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
        //个人简介
        desc: {
            type: String,
        }
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