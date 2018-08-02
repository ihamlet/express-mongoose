const express = require("express")
const router = express.Router()
const User = require("../models/user")

const crypto = require('crypto')

router.post("/register", (req, res) => {
    const md5 = crypto.createHash('md5')

    const phone = req.body.phone
    const password = req.body.password
    md5.update(password + phone)
    const pwd = md5.digest('base64')

    console.log(req,res)

    User.findOne({phone: req.body.phone},(err, doc)=>{
        if(!doc){
            User.create(req.body, (err, User) => {
                if (err) {
                    res.json(err)
                } else {
                    User.password = pwd
                    console.log(User)
                    res.json(User)
                }
            })
        } else {
            res.send({code: 409, warning:'账号已被注册'})
        }
    })
})

module.exports = router