const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/personal-blog'
mongoose.connect(DB_URL)

const models  = {
    article:{
        title:{type:String},
        date:{type:String},
        category:{type:String},
        abstract:{type:String},
        content:{type:String}
    }
}

mongoose.model('article', new mongoose.Schema(models.article))

module.exports = {
    getModel:(name)=>{
        return mongoose.model(name)

    }
}