/**
 * Created by gpalani on 19-05-2017.
 */


var admin = angular.module('admin',['angularModalService','vesparny.fancyModal','ngResource','adminservice','studentservice','attendanceService','authenticationModule','testService']);

admin.controller('adminController',['$scope','$rootScope','$http','ModalService','$fancyModal','adminservicefactory','standardfactory','studentservice','attendanceService','attendanceCheckOutService','testService',function($scope,$rootScope,$http,ModalService, $fancyModal,adminservicefactory,standardfactory,studentservice,attendanceService,attendanceCheckOutService,testService){
  var admin = this;
  admin.student ={};
  var modal;
  admin.CreateShow = function() {

    modal = $fancyModal.open(
      { templateUrl: '../../templates/modal/createStudent.html' },
      {themeClass: 'fancymodal-theme-classic'}
    );

  };
    admin.Attendance = function(){
      modal = $fancyModal.open(  { templateUrl: '../../templates/modal/Attendance.html' },
        {themeClass: 'fancymodal-theme-classic'}
      );
    }

    admin.searchStudent = function (Rollno) {
      admin.student =  studentservice.get({ rollno: Rollno});
      admin.student.$promise.then(function(result){
        if(result.rollno===Rollno){
          admin.searchsuccess= true;
          admin.student = result;
          admin.student.checkin = new Date();
          admin.student.fees = formatDate(result.lastfeespaid);
        }
      });
    };
  function formatDate(feesdate) {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    var feesStatus='und';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    var currentDate = [year, month, day].join('-');
    var demo = feesdate.split('-');
    if((parseInt(month) - parseInt(demo[1]))===1){
      if((parseInt(day)-parseInt(demo[2]))>1){
        feesStatus = "Not Paid";
      }
      else{
        feesStatus = "Paid";
      }
    }
    else if((parseInt(month) - parseInt(demo[1]))>1){
      feesStatus = "Not Paid";
    }
    else if(parseInt(month) == parseInt(demo[1])){
      feesStatus = "Paid";
    }
    return feesStatus;
  }
  admin.save = function(student){
    console.log("CLIENT",student);
    adminservicefactory.save(student);
    $fancyModal.close();
  };
    admin.saveAttendance = function (attendance) {
      attendanceService.save(attendance);
      $fancyModal.close();
    }
    admin.saveTest = function (student) {
      student.subject= $rootScope.subjectsWritten;
      testService.save(student);
      $fancyModal.close();
    }
    admin.checkouttime = function(){
      admin.student.checkout = new Date();
      admin.attendance.checkout = new Date();
    }
  admin.selectrollno = function (standard) {

    admin.latestrollno;
    admin.studentTemp = standardfactory.query({ standard: standard });
    admin.studentTemp.$promise.then(function (result) {
      if(result.rollno===undefined){
        admin.latestrollno = 2017+admin.student.standard+'0';
      }
      else{
        admin.latestrollno = result.rollno;
      }

      admin.latestrollno  = parseInt(admin.latestrollno) + 1;
      admin.student.rollno = admin.latestrollno;

    });



  };

  admin.checkout = function(){
    modal = $fancyModal.open(  { templateUrl: '../../templates/modal/checkout.html' },
      {themeClass: 'fancymodal-theme-classic'}
    );
  }

  admin.test = function () {
    modal = $fancyModal.open(  { templateUrl: '../../templates/modal/test.html' },
      {themeClass: 'fancymodal-theme-classic'}

    );
  }


  admin.searchCheckout = function(rollno){
    admin.student =  studentservice.get({ rollno: rollno});
    admin.student.$promise.then(function(result){
      //if(result.rollno===Rollno){
        admin.searchsuccess= true;
        admin.student = result;

     // }
    });
    admin.attendance = attendanceCheckOutService.get({rollno: rollno});
    admin.attendance.$promise.then(function(result){
      admin.attendance=result;
    });
  }
  admin.updateAttendance = function (attendance,Rollno) {
    console.log("CLIENT UPDATE",attendance);
    attendanceService.update({rollno: Rollno},attendance);
    $fancyModal.close();
  }

  admin.editShow = function(){

    modal = $fancyModal.open(
      { templateUrl: '../../templates/modal/editStudent.html' },
      {themeClass: 'fancymodal-theme-classic'}
    );
  }

  admin.updateStudent = function(student,Rollno){
    adminservicefactory.update({rollno:Rollno},student);
    $fancyModal.close();
  }

  admin.showModalDeleteUser = function(){
    modal = $fancyModal.open(
      { templateUrl: '../../templates/modal/deleteStudent.html' },
      {themeClass: 'fancymodal-theme-classic'}
    );
  }
  admin.deleteStudent = function(Rollno){
    console.log("DELETE CONSOLE ,",Rollno);
    adminservicefactory.delete({rollno:Rollno});
    $fancyModal.close();
  }

}]);
