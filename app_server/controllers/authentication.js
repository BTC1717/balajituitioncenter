/**
 * Created by gpalani on 31-07-2017.
 */


var mongoose = require('mongoose');
var User = mongoose.model('user');
var passport = require('passport');
module.exports.register = function(req, res) {
  var user = new User();
  user.rollno = req.body.rollno;
  user.roles = req.body.roles;
  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
};

module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token,
        "roles":user.roles,
        "rollno":user.rollno
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
