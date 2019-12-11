const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Todolist = new Schema({
description:{
    type:String,
    default:null
}


})

module.export = mongoose.model('Marathon', Todolist)