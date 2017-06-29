/**
 * Created by gpalani on 19-06-2017.
 */
var mongoose = require('mongoose');
var express = require('express');

var app = express();
var Schema = mongoose.Schema;

var AttendanceSchema = new mongoose.Schema({
  rollno:String,
  checkin:String,
  checkout:String,
  attendance:String,
  remarks:String,
  recordofwork:String
});

mongoose.model('attendance',AttendanceSchema);
