'use strict'

const routes = require('express').Router();
const RetiradaCTRL = require('../controllers/retirada-controller');

routes.route('/')
.post(RetiradaCTRL.postRetirada)
.get(RetiradaCTRL.getRetirada);

routes.route('/:id')
.get(RetiradaCTRL.getByIdRetirada);


module.exports = routes;