const mongoose = require('mongoose');


// 创建schema,并用model导出模型

const models = {
    user:{
        userName: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true,
        },
        userType: {
            type: String,
            require: true,
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