'use strict'
const moment = require('moment');
const router = require('express').Router();
moment.locale('pt-Br');


router.get('/',(req, res, next)=>{
    const dataAtual = moment();
    console.log('Data Atual', dataAtual);

    const dataVencimento = moment(dataAtual).add(10,'day');
    console.log('Data Vencimento', dataVencimento);

    const tempoPrazo = dataVencimento.diff(dataAtual, "days", true);
    console.log(tempoPrazo);
    if (tempoPrazo>=20){ 
        console.log('Prazo Acabou'); }
        else { console.log('Ainda Faltam:', tempoPrazo, 'Dias'); }
    
    res.json({Status: 'Servidor Funcionando'});
});

module.exports = router;