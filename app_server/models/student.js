/**
 * Created by gpalani on 18-05-2017.
 */
var mongoose = require('mongoose');
var express = require('express');

var app = express();
var Schema = mongoose.Schema;

var StudentSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  rollno:String,
  fees:String,
  standard:String,
  parentname:String,
  email:String,
  phonenumber:String,
  lastfeespaid:String
});
mongoose.model('student',StudentSchema);

