const express = require("express")
const router = express.Router()
const User = require("../models/user")

const crypto = require('crypto')

router.post("/", (req, res, next) => {
    const md5 = crypto.createHash('md5')

    const phone = req.body.phone
    const password = req.body.password
    md5.update(password + phone)
    const pwd = md5.digest('base64')

    User.findOne({phone: phone},(err, doc)=>{
        if (err) return next(err)
        if (!doc) {
            User.create({phone: phone,password: pwd}, (err, doc) => {
                if(err){
                    res.send({code: 500, warning:'注册失败'})
                }else{
                    res.send({code: 200, warning:'注册成功'})
                }
            })
        } else {
            res.send({code: 409, warning:'账号已被注册'})
        }
    })
})

module.exports = router