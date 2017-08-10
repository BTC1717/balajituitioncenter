/**
 * Created by gpalani on 19-05-2017.
 */


var btcmodule = angular.module('btcmodule',['ui.router','admin','ui.select','angularModalService','student','attendanceService','ngSanitize','adaptv.adaptStrap','authenticationModule','testModule','btcAuthentication','ngStorage','ngResource']);

btcmodule.config(function ($stateProvider,$urlRouterProvider,$httpProvider) {
    var home ={
    name:'home',
    url:'/',
    templateUrl:'../../templates/home.html',
    title:'Balaji Tuition Center'
  };

  var students ={
    name:'students',
    url:'/students',
    templateUrl:'../../templates/students.html',
    title:'Balaji Tuition Center'
  };

  var student ={
    name:'student',
    url:'/student/:rollno',
    templateUrl:'../../templates/studenthomepage.html',
    controller:'studentController',
    controllerAs:'studentctrl',
    title:'Balaji Tuition Center'

  };
  var attendance ={
    name:'student.attendance',
    url:'/student.attendance',
    templateUrl:'../../templates/attendance.html',
    controller:'attendanceController',
    controllerAs:'attendance',
    reloadOnSearch: false,
    title:'Balaji Tuition Center'

  };
  var test ={
    name:'student.test',
    url:'/student.test',
    templateUrl:'../../templates/test.html',
    controller:'testController',
    controllerAs:'test',
    reloadOnSearch: false,
    title:'Balaji Tuition Center'

  };

  var admin ={
    name:'admin',
    url:'/admin',
    templateUrl:'../../templates/admin.html',
    controller:'adminController',
    controllerAs:'adminctrl',
    title:'Balaji Tuition Center'
  };

  var login ={
    name:'login',
    url:'/login',
    templateUrl:'../../templates/login.html',
    controller:'loginController',
    controllerAs:'loginctrl',
    title:'Balaji Tuition Center'
  };


  $stateProvider.state(home);
  $stateProvider.state(students);
  $stateProvider.state(admin);
  $stateProvider.state(student);
  $stateProvider.state(login);
  $stateProvider.state(attendance);
  $stateProvider.state(test);
  $urlRouterProvider.otherwise('/');
  $httpProvider.interceptors.push('myHttpInterceptor');

    var spinnerFunction = function spinnerFunction(data, headersGetter) {

        jQuery("#spinner").show();
        return data;
    };

    $httpProvider.defaults.transformRequest.push(spinnerFunction);
});

btcmodule.run(['$rootScope',
  '$state',
  '$location',
  '$stateParams','authentication','$localStorage',function ($rootScope,$state, $location, $stateParams,authentication,$localStorage) {
    $rootScope.role = $localStorage.role;
    $rootScope.rollno =$localStorage.rollno;
    $rootScope.login =$localStorage.login;
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
     if(toState.name==='admin'){
       if(!authentication.isLoggedIn()){
         $state.go('login');
         event.preventDefault();
       }
       else{
        // event.preventDefault();
         $state.go('admin');
           event.preventDefault();
       }

     }
      if(toState.name==='student.attendance'){
        if(!authentication.isLoggedIn()){

          $state.go('login');
          event.preventDefault();
        }
        else{
          if($rootScope.rollno!=toParams.rollno){
            if($rootScope.role!='admin'){
              $state.go('student.attendance',{'rollno':$rootScope.rollno});
            }
            else{
              $state.go('student.attendance',{'rollno':toParams.rollno});
            }
          }
          else{
            $state.go('student.attendance',{'rollno':toParams.rollno});
          }


        }

      }
      if(toState.name==='student.test'){
        if(!authentication.isLoggedIn()){

          $state.go('login');
          event.preventDefault();
        }
        else{

            if($rootScope.rollno!=toParams.rollno){
              if($rootScope.role!='admin'){
                $state.go('student.test',{'rollno':$rootScope.rollno});
              }
              else{
                $state.go('student.test',{'rollno':toParams.rollno});
              }
            }
            else{
              $state.go('student.test',{'rollno':toParams.rollno});
            }



        }

      }
    });
  }]);


btcmodule.factory('myHttpInterceptor', function ($q) {
    return function (promise) {
        return promise.then(function (response) {

            jQuery("#spinner").hide();
            return response;
        }, function (response) {

            jQuery("#spinner").hide();
            return $q.reject(response);
        });
    };
});

