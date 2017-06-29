/**
 * Created by gpalani on 19-06-2017.
 */
var mongoose = require('mongoose');
var Attendance = mongoose.model('attendance');

module.exports.getAttendanceDetails = function(req,res){
  Attendance.find({rollno:req.params.rollno},function(err,attendance)
  {
    {

      if (err) return handleError(err);

      res.json(attendance);
    }

  });


};
module.exports.saveAttendance = function(req,res){
  var newAttendance = new Attendance();
  newAttendance.rollno = req.body.rollno;
  newAttendance.checkin = req.body.checkin;
  newAttendance.checkout = req.body.checkout;
  newAttendance.attendance = req.body.attendance;
  newAttendance.remarks = req.body.remarks;
  newAttendance.recordofwork = req.body.recordofwork;
  console.log("ATTENDANCE SAVE",newAttendance);
  newAttendance.save(function(err, createdObject){
    if (err) {
      console.log("ERROR IN SAVING !!!!",err);
      res.send(err);
    }else{
      console.log("SAVED !!!!");
      res.send(createdObject);
      console.log("SAVED COOL !!!!")
    }

  });
};

module.exports.updateAttendance = function(req,res){

  Attendance.findOne({rollno:req.body.rollno,checkin:req.body.checkin},function(err,attendance){
    console.log("FOUND",attendance);
    attendance.checkout = req.body.checkout;
    attendance.remarks = req.body.remarks;
    attendance.recordofwork = req.body.recordofwork;
    attendance.attendance = req.body.attendance;
    attendance.save(function (err,attendance) {
      if (err) {
        res.status(500).send(err)
      }else{
        console.log("UPDATED ATTENDANCE SERVER",attendance);
        res.send(attendance);
      }

    });
  });
};

module.exports.findAttendance =function(req,res){

  var attendance = Attendance.findOne({rollno:req.params.rollno}).select({}).sort({_id:-1}).limit(1);
  console.log("INSIDE CONTROLLER",attendance);
  attendance.exec(function(err, atten){

    if (err) {
      res.send(err)
    }
    if (atten) {
      res.send(atten)
    } else {
      res.send("No Student found with that ID")
    }
  });
};
