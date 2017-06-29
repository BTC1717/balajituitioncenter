/**
 * Created by gpalani on 23-06-2017.
 */
var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController')

router.post('/',testController.saveScore);
router.get('/',testController.getScore);
module.exports = router;
