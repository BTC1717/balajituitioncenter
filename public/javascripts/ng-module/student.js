/**
 * Created by gpalani on 20-05-2017.
 */
var student = angular.module('student',['ngResource','studentservice','attendanceService','adaptv.adaptStrap']);
student.controller('studentController',['studentservice','$stateParams',function (studentservice,$stateParams) {
      var student = this;

      student.currentstudent = studentservice.get({ rollno: $stateParams.rollno });
  student.currentstudent.$promise.then(function (result) {
    student.currentstudent.fees = formatDate(result.lastfeespaid);

  });
  function formatDate(feesdate) {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    var feesStatus='und';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    var currentDate = [year, month, day].join('-');
    var demo = feesdate.split('-');
    if((parseInt(month) - parseInt(demo[1]))===1){
      if((parseInt(day)-parseInt(demo[2]))>1){
        feesStatus = "Not Paid";
      }
      else{
        feesStatus = "Paid";
      }
    }
    else if((parseInt(month) - parseInt(demo[1]))>1){
      feesStatus = "Not Paid";
    }
    else if(parseInt(month) == parseInt(demo[1])){
      feesStatus = "Paid";
    }
    return feesStatus;
  }

}]);

student.controller('attendanceController',['attendanceService','$stateParams',function (attendanceService,$stateParams) {
  var attendance = this;
  attendance.state={};
  attendance.attendance = attendanceService.query({ rollno: $stateParams.rollno });
  attendance.studentAttendance='STUDENT ATTENDANCE';
  attendance.searchText= '';
  attendance.state = {
    sortKey: 'Date',
    sortDirection: 'DEC'
  }
  attendance.studentAttendanceColumnDefinition =[{
    columnHeaderDisplayName: 'Attendance',
    displayProperty: 'attendance',
    sortKey: 'attendance',
    columnSearchProperty: 'attendance',
    visible: true
  },
    {
      columnHeaderDisplayName: 'Date',
      displayProperty: 'checkin',
      size:'4em',
      sortKey: 'checkin',
      template:"<span>{{item.checkin|date:'MMM dd yyyy'}}</span>",
      columnSearchProperty: 'checkin',
      visible: true
    },
    {
      columnHeaderDisplayName: 'checkin',
      templateUrl:'../../templates/tabledata/checkin.html',

      //displayProperty: 'checkin',
      sortKey: 'checkin',
      columnSearchProperty: 'checkin',

      visible: true
    },
    {
      columnHeaderDisplayName: 'checkout',
      displayProperty: 'checkout',
      sortKey: 'checkout',
      columnSearchProperty: 'checkout',
      templateUrl:'../../templates/tabledata/checkout.html',
      visible: true
    }, {
      columnHeaderDisplayName: 'Record Of Work',
      displayProperty: 'recordofwork',
      sortKey: 'recordofwork',
      columnSearchProperty: 'recordofwork',

      visible: true
    }, {
      columnHeaderDisplayName: 'Remarks',
      displayProperty: 'remarks',
      sortKey: 'remarks',
     columnSearchProperty: 'remarks',
      visible: true
    }];

}])



