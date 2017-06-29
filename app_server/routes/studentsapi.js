/**
 * Created by gpalani on 18-05-2017.
 */


var express = require('express');
var router = express.Router();
var studentsapicontroller = require('../controllers/studentsapicontroller');

router.get('/',studentsapicontroller.getallstudents);
module.exports = router;
