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

    User.findOne({phone: phone, password: pwd},(err, doc)=>{
        if (err) return next(err)
        if (doc) {
            res.send({code: 200, warning:'登陆成功'})
        } else {
            res.send({code: 400, warning:'请检查用户名密码'})
        }
    })
})

module.exports = router