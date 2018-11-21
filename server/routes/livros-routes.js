'use strict'
const router = require('express').Router();
const livroControllers = require('../controllers/livro-controllers');

router.get('/', livroControllers.getLivro );
router.post('/', livroControllers.postLivro);

module.exports = router;