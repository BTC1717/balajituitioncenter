/**
 * Created by gpalani on 20-05-2017.
 */

var mongoose = require('mongoose');
var Student = mongoose.model('student');

module.exports.saveStudent = function(req,res){
  var newStudent = new Student(req.body);
  newStudent.save(function(err, createdObject){
    if (err) {
      res.send(err);
    }
    res.send(createdObject);
  });
};

module.exports.getallstudents = function(req,res) {
  Student.find({}, function (err, student) {

    {

      if (err) return handleError(err);

      res.json(student);
    }

  });
}


module.exports.getStudent =function (req,res) {
  Student.findOne({rollno:req.params.rollno},function(err, student){
    console.log(req.params.rollno);
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

module.exports.updateStudent = function(req,res){
  Student.findOne({rollno:req.body.rollno},function (err,student) {
    if(err){
      console.log("CANNOT FIND A STUDENT TO UPDATE");
    }
    else {
      console.log("UPDATING CURRENT ",student);
      console.log("UPDATING CURRENT ",student);
      console.log("GOT ",req.body);
      student.firstname  =req.body.firstname;
      student.lastname  =req.body.lastname;
      student.rollno =req.body.rollno;
      student.fees =req.body.fees;
      student.standard =req.body.standard;
      student.parentname =req.body.parentname;
      student.email =req.body.email;
      student.phonenumber =req.body.phonenumber;
      student.lastfeespaid =req.body.lastfeespaid;
      student.save(function (err,student) {
        if(err){
          console.log("SORRY CANNOT UPDATE STUDENT");
        }else{
          res.send(student);
        }
      });
    }

  });

}

module.exports.deleteStudent = function (req,res) {
  //console.log("DELETE REQ",req.param);
  Student.findOneAndRemove({rollno:req.params.rollno},function (err,student) {
    if(err){
      res.send(err);
    }
    else{
      res.send("Student "+ student.rollno+" deleted");
    }
  })

}

