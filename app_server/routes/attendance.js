/**
 * Created by gpalani on 19-06-2017.
 */
var express = require('express');
var router = express.Router();
var attendanceapicontroller = require('../controllers/attendancecontroller');


router.get('/:rollno',attendanceapicontroller.getAttendanceDetails);
router.get('/attendance/:rollno',attendanceapicontroller.findAttendance);
router.post('/',attendanceapicontroller.saveAttendance);
router.put('/:rollno',attendanceapicontroller.updateAttendance);
module.exports = router;
