'use strict'

const userModel = require('../models/usuarios-models');

const userCTRL = {};

userCTRL.postUser = (req, res, next)=>{
    const newUser = new userModel({
        cod: req.body.cod,
        name: req.body.name,
        email: req.body.email
    });
    newUser.save();
}

module.exports = userCTRL;