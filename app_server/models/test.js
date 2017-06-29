/**
 * Created by gpalani on 23-06-2017.
 */

var mongoose = require('mongoose');
var express = require('express');

var app = express();
var Schema = mongoose.Schema;
var TestSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  rollno:String,
  maths:String,
  physics:String,
  chemistry:String,
  biology:String,
  csc:String,
  english:String,
  language:String,
  science:String,
  social:String
});
mongoose.model('test',TestSchema);
