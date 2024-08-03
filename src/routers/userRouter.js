const express = require('express')
const userRouter = express.Router()

userRouter.get('/api/user',(req,res)=>{
    res.status(200).send({
        message:'user ware returned'
    })
})

module.exports = userRouter