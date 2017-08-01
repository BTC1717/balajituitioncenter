/**
 * Created by gpalani on 01-08-2017.
 */

var testService = angular.module('testService',['ngResource']);

testService.factory('testService',function ($resource) {
  return $resource('api/test/:rollno',{rollno:'@_rollno'},{
    'query': { method: 'GET',isArray:true}
  });

});
