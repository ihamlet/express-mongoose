const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/user", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)
　　}else{
　　　　console.log('Connection success!') 
   }
})

const UserSchema = new mongoose.Schema({
    phone: Number,
    password: String
})

module.exports = mongoose.model('user', UserSchema)