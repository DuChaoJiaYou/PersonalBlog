const express = require('express')
const Router = express.Router()

const model = require('../model/model')
const Article = model.getModel('article')

//增
Router.post('/postArticle', (req, res) => {
    console.log(req.body);
    const { title, content, category, abstract } = req.body
    if (req.body) {
        const articleModel = new Article({ title, content, category, abstract })
        articleModel.save((err, doc) => {
            if (!err) {
                res.json({ data: doc })
            }
        })
    }
})

//查
Router.get('/initArticleList', (req, res) => {
    Article.find((err, doc) => {
        if (!err) {
            console.log(doc);
            res.json(doc)
        }

    })
})

//删
Router.delete('/delArticle',(req,res)=>{
    const {_id} = req.body
    console.log(_id);
    Article.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            console.log(doc);
            res.json({code:'1okk'})
        }
        // console.log(err);
    })
})

//改
Router.put('/editArticle',(req,res)=>{
    console.log(req.body);
    
    const {_id,title,content,category,abstract} = req.body
    Article.findByIdAndUpdate(_id,{title,content,category,abstract},(err,doc)=>{
        if(!err){
             res.json(doc)
        }
    })
})

module.exports = Router