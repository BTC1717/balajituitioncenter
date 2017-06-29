/**
 * Created by gpalani on 19-06-2017.
 */
var attendanceService = angular.module('attendanceService',['ngResource']);

attendanceService.factory('attendanceService',function($resource){
  return $resource('/api/attendance/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT'
    }
  });
});
attendanceService.factory('attendanceCheckOutService',function($resource){
  return $resource('/api/attendance/attendance/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT'
    }
  });
});
