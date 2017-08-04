/**
 * Created by gpalani on 19-06-2017.
 */
var attendanceService = angular.module('attendanceService',['ngResource','btcAuthentication']);

attendanceService.factory('attendanceService',function($resource,authentication){
  return $resource('/api/attendance/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT',headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }
    },
    'save':   {method:'POST',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
    'query': { method: 'GET',isArray:true,
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
  });
});
attendanceService.factory('attendanceCheckOutService',function($resource,authentication){
  return $resource('/api/attendance/attendance/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }
    },
    'query': { method: 'GET',isArray:false,
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
    'save':   {method:'POST',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }}
  });
});
