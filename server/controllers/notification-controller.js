'use strict'
const retiradaModels = require('../models/retirada');
const moment = require('moment');
const nodemailer = require('nodemailer');

const notifCtrl = {};

notifCtrl.getNotification = async (req, res, next)=>{
        const queryRetirada = await retiradaModels.find().populate(['livro','user']);
        res.json(queryRetirada);
        for (var i=0; i<queryRetirada.length; i++){
            console.log("DIVIDÃO DOCUMENTOS -----------------------------------------------------")
            const Prazo = moment(queryRetirada[i].dateDevolution).diff('20181210', "days", true);
            console.log(Prazo);
            if(Prazo<=0){ 
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                        user: "ed4ngelis@gmail.com",
                        pass: "#Google=711724"
                    },
                    tls: { rejectUnauthorized: false }
                  });

                  const mailOptions = {
                    from: 'ed4ngelis@gmail.com',
                    to: queryRetirada[i].user.email,
                    subject: 'Devolução de Livro',
                    text: ('ATENÇÃO!!! Senhor '+ queryRetirada[i].user.name + ', a Data da Entrega do Livro, ' + queryRetirada[i].livro.name + ' Vence Hoje')
                  };

                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email enviado: ' + info.response);
                    }
                  });
                
                console.log("NOTIFICAÇÃO ENVIADA POR E-MAIL");}
        }
        
    }
   


module.exports = notifCtrl;