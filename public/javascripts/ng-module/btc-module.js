/**
 * Created by gpalani on 19-05-2017.
 */


var btcmodule = angular.module('btcmodule',['ui.router','admin','ui.select','angularModalService','student','attendanceService','ngSanitize','adaptv.adaptStrap','authenticationModule','testModule']);

btcmodule.config(function ($stateProvider,$urlRouterProvider) {
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
});
