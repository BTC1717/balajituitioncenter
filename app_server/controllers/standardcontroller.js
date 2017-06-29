/**
 * Created by gpalani on 22-05-2017.
 */

var mongoose = require('mongoose');
var Student = mongoose.model('student');

module.exports.findAvailableRollno =function(req,res){

  var selectedRollno = Student.findOne({standard:req.params.standard}).select({ "rollno": 1, "_id": 1}).sort({_id:-1}).limit(1);
  selectedRollno.exec(function(err, student){

    if (err) {
      res.send(err)
    }
    if (student) {
      res.send(student)
    } else {
      res.send("No Student found with that ID")
    }
  });
};
