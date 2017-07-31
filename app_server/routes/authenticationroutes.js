/**
 * Created by gpalani on 31-07-2017.
 */
var express = require('express');
var router = express.Router();
var authenticationController = require('../controllers/authentication');
router.post('/login',authenticationController.login);
router.post('/register',authenticationController.register);
module.exports = router;
