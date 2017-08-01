/**
 * Created by gpalani on 31-07-2017.
 */

var authenticationModule = angular.module('authenticationModule',['ui.router']);

authenticationModule.controller('loginController',['$scope','$http','$state',function ($scope,$http,$state) {
  $scope.loginerror='';
  $scope.errorMessage='';
  this.login = function(user){
    console.log(user);
    $http.post('/api/authenticate/login',user).then(this.loginSuccess,this.loginError)
  };

  this.loginSuccess = function (response) {

    $state.go('student.attendance',{'rollno':response.data.rollno});
  }
  this.loginError = function(error){
    $scope.loginerror=true;
   $scope.errorMessage='Please enter a valid Rollno and Password';
   console.log( this.loginerror+this.errorMessage);
  }
}]);
