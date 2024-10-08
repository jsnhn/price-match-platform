const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', usersCtrl.create); // it is empty / becasuer we will be using prefix after
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);


module.exports = router;