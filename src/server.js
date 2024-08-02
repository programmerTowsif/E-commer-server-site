const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/test',(req,res)=>{
    res.status(200).send({
        message:'api testing is working'
    })
})
//client error handling 
app.use((req,res,next)=>{
    res.status(404).json({message:'router not found'})
    next()
})
//server error handler
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(3001,()=>{
    console.log(`server is runnig at http://localhost:3001`)
})