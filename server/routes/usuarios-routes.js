'use strict'

const router = require("express").Router();
const userControllers = require('../controllers/usuarios-controllers');

router.post('/', userControllers.postUser);

module.exports = router;