const express = require('express')
const app   = express()

//单独引入body-parser中间件
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//引入相关路由
const articleRouter  =  require('./routes/article')
app.listen('3002',()=>{
    console.log('server is listen an 3002');
})
app.use('/article',articleRouter)
app.get('/',(req,res)=>{
    res.json('OH this is good ')
})