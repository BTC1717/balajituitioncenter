/**
 * Created by gpalani on 20-05-2017.
 */
var service = angular.module('adminservice',['ngResource']);

service.factory('adminservicefactory',function($resource){
  return $resource('/api/admin/students/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT'
    },
    delete: {
      method: 'DELETE'
    }
  });
});


service.factory('standardfactory',function($resource){
  return $resource('/api/standard/:standard',{standard:'@_standard'},{
    update: {
      method: 'PUT'
    },

  'query': { method: 'GET',isArray:false
  }
  });
});
