var express = require('express');
var router = express.Router();
var auth = require("../controllers/UserController.js");

// restrict index for logged in user only
router.get('/', auth.home);

// route to signup page
router.get('/signup', auth.signup);

// route for signup action
router.post('/signup', auth.dosignup);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
