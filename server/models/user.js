const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/user", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:','用户表单连接失败！' + err)
　　}else{
　　　　console.log('Connection success!','用户表单连接成功！') 
   }
})

const UserSchema = new mongoose.Schema({
    phone: Number,
    password: String
},{ collection: 'user'})

module.exports = mongoose.model('user', UserSchema)