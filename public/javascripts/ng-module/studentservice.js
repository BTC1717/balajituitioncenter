/**
 * Created by gpalani on 20-05-2017.
 */
var studentservice = angular.module('studentservice',['ngResource']);

studentservice.factory('studentservice',function($resource){
  return $resource('/api/admin/students/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT'
    }
  });
});

