//hero.js文件

//引入mongoose模块
const mongoose = require('mongoose')
// 连接
mongoose.connect("mongodb://localhost:27017/myhero", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:','列表数据连接失败!'  + err)
　　}else{
　　　　console.log('Connection success!','列表数据连接成功!') 
   }
})


//定义数据模型，可以看到，我们下面创建了一个表，表中的数据有name、age、sex等字段，并且这些字段的数据类型也定义了，最后将model导出即可
const heroSchema = mongoose.Schema({
  name :String,
  age : String,
  sex : String,
  address : String,
  dowhat : String,
  imgArr:[],
  favourite:String,
  explain:String
}, { collection: 'myhero'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。

//导出model模块
module.exports = mongoose.model('hero',heroSchema)
