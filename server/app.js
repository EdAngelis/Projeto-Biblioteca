'use strict'

const http = require('http');
const mongoose = require('mongoose'); 
const express = require('express');
const app = express();

const livrosRoutes = require('.//routes/livros-routes');
const routes = require('../server/routes/routes');
const usuariosRoutes = require('../server/routes/usuarios-routes');
const retiradaRoutes = require('../server/routes/retirada-routes');

http.createServer(app);
mongoose.connect('mongodb://DeAngelis84:biblioteca1234@ds163683.mlab.com:63683/biblioteca', {useNewUrlParser:true});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);
    
app.use('/', routes);
app.use('/livros', livrosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/retirarLivro', retiradaRoutes);

app.listen(app.get('port'),()=>{
    console.log("Servidor Funcionando na porta:", + app.get('port'));
});