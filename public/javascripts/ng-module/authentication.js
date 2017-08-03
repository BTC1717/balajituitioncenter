/**
 * Created by gpalani on 31-07-2017.
 */

var authenticationModule = angular.module('authenticationModule',['ui.router','btcAuthentication','ngStorage']);

authenticationModule.controller('loginController',['$scope','$http','$state','authentication','$rootScope','$window','$localStorage',function ($scope,$http,$state,authentication,$rootScope,$window,$localStorage) {
  $scope.loginerror='';
  $scope.errorMessage='';
  $rootScope.role='';
  $rootScope.login=false;
  this.login = function(user){
    $http.post('/api/authenticate/login',user).then(this.loginSuccess,this.loginError)
  };

  this.loginSuccess = function (response) {
    $localStorage.role = response.data.roles;
    $localStorage.rollno =response.data.rollno;
    $localStorage.login =true;
    $rootScope.role = $localStorage.role;
    $rootScope.rollno = $localStorage.rollno;
    $rootScope.login= $localStorage.login;
    authentication.saveToken(response.data.token);
    if($rootScope.role ==='admin'){
      $state.go('admin');
    }
    else{
      $state.go('student.attendance',{'rollno':response.data.rollno});
    }

  }
  this.loginError = function(error){
    $scope.loginerror=true;
   $scope.errorMessage='Please enter a valid Rollno and Password';
  }
}]);
