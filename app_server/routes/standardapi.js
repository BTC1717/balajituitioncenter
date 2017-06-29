/**
 * Created by gpalani on 22-05-2017.
 */
var express = require('express');
var router = express.Router();

var standardcontroller = require('../controllers/standardcontroller');
router.get('/:standard',standardcontroller.findAvailableRollno);

module.exports = router;
