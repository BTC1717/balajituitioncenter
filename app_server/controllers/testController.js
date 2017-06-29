/**
 * Created by gpalani on 23-06-2017.
 */
var mongoose = require('mongoose');
var Test = mongoose.model('test');


module.exports.saveScore = function (req,res) {

  var newScore = new Test(req.body);
  newScore.save(function (err,Score) {
    if(err){

      res.send(err);
    }else if(Score){
      console.log("SAVE SCORE");
      res.send(newScore);
    }


  });

};

module.exports.getScore = function (req,res) {
  Test.find({},function(err,score){
    if(err){
      console.log("ERROR FETCHING SCORE");
      res.send(err);
    }
    else if(score){
      console.log(" FETCHING SCORE");
      res.send(score);
    }
  });

}

/*module.exports.getStudentScore = function (req,res) {
  Test.find({rollno:req.params.rollno},function () {

  })

}*/
