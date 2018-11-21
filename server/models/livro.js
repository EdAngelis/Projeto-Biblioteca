'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livroSchema = new Schema ({
    
    name:{type:String, required:true},
    author:{type:String, required:true},
    category:{type:String, required:true}
});

module.exports = mongoose.model('livro', livroSchema);