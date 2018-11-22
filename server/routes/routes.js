'use strict'

const moment = require('moment');
const router = require('express').Router();
moment.locale('pt-Br');


router.get('/', (req, res, next)  => { 

  
  
  
    /* const dataAtual = moment();
    console.log('Data Atual', dataAtual);

    const dataVencimento = moment(dataAtual).add(10,'day');
    console.log('Data Vencimento', dataVencimento);

    const tempoPrazo = dataVencimento.diff('20181202', "days", true);
    console.log(tempoPrazo);
    if (tempoPrazo<=0){ 
        console.log('Prazo Acabou'); }
        else { console.log('Ainda Faltam:', tempoPrazo, 'Dias'); } */
    
    res.json({Status: 'Servidor Funcionando'}); 
});

module.exports = router;