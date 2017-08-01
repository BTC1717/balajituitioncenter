/**
 * Created by gpalani on 23-06-2017.
 */

var mongoose = require('mongoose');
var express = require('express');

var app = express();
var Schema = mongoose.Schema;
var TestSchema = new mongoose.Schema({
  rollno:String,
  subject:[String],
  marks:String,
  date:String,
  fullmarks:String
});
mongoose.model('test',TestSchema);
