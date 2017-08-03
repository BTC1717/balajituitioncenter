/**
 * Created by gpalani on 01-08-2017.
 */

var testService = angular.module('testService',['ngResource','btcAuthentication']);

testService.factory('testService',function ($resource,authentication) {
  return $resource('api/test/:rollno',{rollno:'@_rollno'},
    {
    'query': { method: 'GET',isArray:true,
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
      'save':   {method:'POST',
        headers: {
          'Authorization': 'Bearer ' + authentication.getToken()
        }}
  }
  );

});
