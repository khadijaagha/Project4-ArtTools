const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//all paths start with '/api/users'

//POST to /api/users (aka sign up/create user)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

//GET api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router