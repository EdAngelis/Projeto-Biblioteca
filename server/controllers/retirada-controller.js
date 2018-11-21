'use strict'

const retiradaModel = require('../models/retirada');


const RetiradaCTRL={};

RetiradaCTRL.postRetirada = (req, res, next)=>{
    const data = Date.now();
    const novaRetirada = new retiradaModel({

        user:    req.body.user,
        livro:   req.body.livro,
        date:    data
    })
    novaRetirada.save();

};

RetiradaCTRL.getRetirada = async (req, res, next)=>{
    try{
        const retirada = await retiradaModel.find().populate('livro').populate('user');
            return res.send(retirada);
}catch (err){
    return res.status(400).send({error: 'Error '});
}

}

RetiradaCTRL.getByIdRetirada = async (req, res, next)=>{
        const {id} = req.params;
        const retirada = await retiradaModel.findById(id).populate(['livro','user']);
        return res.send(retirada.user.name);

}

module.exports = RetiradaCTRL;