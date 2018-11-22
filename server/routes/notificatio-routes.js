'use strict'
const router = require('express').Router();
const notifCTRL = require('../controllers/notification-controller');

router.get('/', notifCTRL.getNotification );

module.exports = router;