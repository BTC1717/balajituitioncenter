/**
 * Created by gpalani on 20-05-2017.
 */
var express = require('express');
var router = express.Router();

var adminCtrl = require('../controllers/admincontroller');
router.post('/students',adminCtrl.saveStudent);

router.get('/students',adminCtrl.getallstudents);
router.get('/students/:rollno',adminCtrl.getStudent);
router.put('/students/:rollno',adminCtrl.updateStudent);
router.delete('/students/:rollno',adminCtrl.deleteStudent);
module.exports = router;
