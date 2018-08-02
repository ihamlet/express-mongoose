const express = require("express")
const router = express.Router()
const User = require("../models/user")

// const crypto = require('crypto')

// router.post('/register',(req,res)=>{
//     const md5 = crypto.createHash('md5')
//     const phone = req.body.phone
//     const password = req.body.password

//     md5.update(password + phone)

//     const pwd = md5.digest('base64')

//     User.findOne({phone: phone},(err, doc)=>{
//         if(doc) {
//             User.create({
//                 phone: phone,
//                 password: pwd,
//                 code:200
//             })
//         }
//     })
// })


router.post("/register", (req, res) => {
    //使用model上的create方法储存数据
    User.create(req.body, (err, User) => {
      if (err) {
        res.json(err);
      } else {
        res.json(User);
      }
    })
})

module.exports = router