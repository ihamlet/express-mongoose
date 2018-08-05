const express = require("express")

const jwt = require('jsonwebtoken')

const router = express.Router()
const User = require("../models/user")

const crypto = require('crypto')

router.post("/", (req, res, next) => {
    const md5 = crypto.createHash('md5')

    const phone = req.body.phone
    const password = req.body.password
    md5.update(password + phone)
    const pwd = md5.digest('base64')

    User.findOne({phone: phone, password: pwd},(err, doc)=>{
        if (err) return next(err)
        if (doc) {
            let token = jwt.sign({ phone: phone }, 'shh_token', {expiresIn: '24h'})
            res.send({code: 200, message:'登陆成功',token:token})
        } else {
            res.send({code: 400, message:'请检查用户名密码'})
        }
    })
})



module.exports = router