/**
 * Created by gpalani on 20-05-2017.
 */
var student = angular.module('student',['ngResource','studentservice','attendanceService','adaptv.adaptStrap']);
student.controller('studentController',['studentservice','$stateParams',function (studentservice,$stateParams) {
      var student = this;

      student.currentstudent = studentservice.get({ rollno: $stateParams.rollno });
      console.log("STUDENT DATA",student.currentstudent);

}]);

student.controller('attendanceController',['attendanceService','$stateParams',function (attendanceService,$stateParams) {
  var attendance = this;
  attendance.attendance = attendanceService.query({ rollno: $stateParams.rollno });
  console.log("FETCHED DATA", attendance.attendance);
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



