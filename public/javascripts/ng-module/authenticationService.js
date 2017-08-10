/**
 * Created by gpalani on 02-08-2017.
 */

//(function () {
var btcAuthentication = angular.module('btcAuthentication',['ngStorage']);
btcAuthentication.service('authentication', authentication);
authentication.$inject = ['$http', '$window','$rootScope','$localStorage'];
function authentication ($http, $window,$rootScope,$localStorage) {

  var saveToken = function (token) {
    $window.localStorage['mean-token'] = token;
  };

  var getToken = function () {
    return $window.localStorage['mean-token'];
  };

  $rootScope.logout = function() {
    $rootScope.login=false;
    $window.localStorage.removeItem('mean-token');
    delete $localStorage.role;
    delete $localStorage.login;
    delete $localStorage.rollno;
  };
  var isLoggedIn = function() {
    var authneticate = false;
    var token = getToken();
    var payload;

    if(token){
      payload = token.split('.')[1];
      payload = $window.atob(payload);
      payload = JSON.parse(payload);
      console.log(payload.exp);
      authneticate = payload.exp > Date.now()/1000;
    } else {
      authneticate = false;
    }

    return authneticate;
  };
  var currentUser = function() {
    if(isLoggedIn()){
      alert("INVOKED");
      var token = getToken();
      var payload = token.split('.')[1];
      payload = $window.atob(payload);
      payload = JSON.parse(payload);
      return {
        email : payload.email,
        name : payload.name
      };
    }
  };

  return {
    saveToken : saveToken,
    getToken : getToken,
   // logout : logout,
    isLoggedIn:isLoggedIn
  };
}

//})();
