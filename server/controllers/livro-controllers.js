'use strict'
const livroModel = require('../models/livro');

const livroCtrl = {};

livroCtrl.getLivro = async (req, res, next)=>{
    const livros = await livroModel.find();
    res.json(livros);
}

livroCtrl.postLivro = async (req, res, next)=>{
    const newLivro = new livroModel (req.body);
    await newLivro.save();
    console.log(newLivro.name);
}

module.exports = livroCtrl;