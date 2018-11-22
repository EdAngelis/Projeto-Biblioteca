'use strict'

const moment = require('moment');
const retiradaModel = require('../models/retirada');


const RetiradaCTRL={};

RetiradaCTRL.postRetirada = (req, res, next)=>{
    const dateCurrent = moment();
    const dateDevolution = moment(dateCurrent).add(15,'day');
    const novaRetirada = new retiradaModel({
        user:    req.body.user,
        livro:   req.body.livro,
        dateDevolution:  dateDevolution
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

RetiradaCTRL.getNotification = async (req, res, next)=>{
    try{
        const retirada = await retiradaModel.find().populate('livro').populate('user');
            return res.send(retirada);
}catch (err){
    return res.status(400).send({error: 'Error '});
}
}

module.exports = RetiradaCTRL;