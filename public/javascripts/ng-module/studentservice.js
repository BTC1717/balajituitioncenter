/**
 * Created by gpalani on 20-05-2017.
 */
var studentservice = angular.module('studentservice',['ngResource','btcAuthentication']);

studentservice.factory('studentservice',function($resource,authentication){
  return $resource('/api/admin/students/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
      'query': { method: 'GET',/*,isArray:true,*/
        headers: {
          'Authorization': 'Bearer ' + authentication.getToken()
        }},
      'save':   {method:'POST',
        headers: {
          'Authorization': 'Bearer ' + authentication.getToken()
        }}

  });
});

