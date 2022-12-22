const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{type:String , required:true},
    price:{type:Number , required:true},
    category:{type:String , required:true}
})

const Add = mongoose.model('adds',itemSchema)
module.exports = Add;