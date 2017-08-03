/**
 * Created by gpalani on 20-05-2017.
 */
var service = angular.module('adminservice',['ngResource','btcAuthentication']);

service.factory('adminservicefactory',function($resource,authentication){
  return $resource('/api/admin/students/:rollno',{rollno:'@_rollno'},{
    update: {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }
    },
    'query': { method: 'GET',isArray:true,
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
    'save':   {method:'POST',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }},
    delete: {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }
    }
  });
});


service.factory('standardfactory',function($resource,authentication){
  return $resource('/api/standard/:standard',{standard:'@_standard'},{
    update: {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }
    },

  'query': { method: 'GET',isArray:false,
    headers: {
      'Authorization': 'Bearer ' + authentication.getToken()
    }
  },
    'save':   {method:'POST',
      headers: {
        'Authorization': 'Bearer ' + authentication.getToken()
      }}
  });
});
