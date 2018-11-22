const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userModel = require('../models/usuarios-models');
const livroModel = require('../models/livro');

const livroRetirado = new Schema({

    user:{ type: mongoose.Schema.Types.ObjectId, 
    ref: 'user',
    required: true },
    
    livro:{ type: mongoose.Schema.Types.ObjectId, 
    ref: 'livro',
    required: true, unique:true},

    dateDevolution:{ type: Date, required: true}
});

module.exports = mongoose.model('retirada', livroRetirado);