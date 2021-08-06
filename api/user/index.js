const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.getUsersController);
router.post('/', controllers.postUserController);
router.post('/login', controllers.postUserLoginController)

module.exports = router;