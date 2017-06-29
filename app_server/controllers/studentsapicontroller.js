/**
 * Created by gpalani on 18-05-2017.
 */

var mongoose = require('mongoose');
var Student = mongoose.model('student');
  module.exports.getallstudents = function(req,res){
    Student.find({},function(err,student)
    {

      {

        if (err) return handleError(err);

        res.json(student);
      }

    });
};
