/**
 * Created by gpalani on 01-08-2017.
 */

var testController = angular.module('testModule',['testService','vesparny.fancyModal']);

testController.controller('testController',['testService','$stateParams','$rootScope','$fancyModal',function(testService,$stateParams,$rootScope,$fancyModal){
  var test = this;
  test.state={};
  $rootScope.subjectsWritten = [];
  test.score = testService.query({rollno:$stateParams.rollno});
  test.testScore='STUDENT TEST SCORE';
  test.searchText= '';
  this.student={};
  test.subjects=['MATHS','PHYSICS','CHEMISTRY','COMPUTER SCIENCE','BIOLOGY','SCIENCE','SOCIAL','LANGUAGE','ENGLISH'];
  test.state = {
    sortKey: 'Date',
    sortDirection: 'DEC'
  }
  test.testScoreColumnDefinition = [
    {
    columnHeaderDisplayName: 'Date',
    displayProperty: 'date',
    sortKey: 'date',
    columnSearchProperty: 'date',
    template:"<span>{{item.date|date:'MMM dd yyyy'}}</span>",
    visible: true
  },{
    columnHeaderDisplayName: 'Subjects',
    displayProperty: 'subject',
    sortKey: 'subject',
    columnSearchProperty: 'subject',
      templateUrl:'../../templates/tabledata/subject.html',
    visible: true
},{
    columnHeaderDisplayName: 'Marks',
    displayProperty: 'marks',
    sortKey: 'marks',
    columnSearchProperty: 'marks',
    visible: true
  },
    {
      columnHeaderDisplayName: 'Full Marks',
      displayProperty: 'fullmarks',
      sortKey: 'fullmarks',
      columnSearchProperty: 'fullmarks',
      visible: true
    },
    {
      columnHeaderDisplayName: 'Result',
      templateUrl:'../../templates/tabledata/result.html',
      sortKey: 'result',
      columnSearchProperty: 'result',
      visible: true
    }
  ];
  $rootScope.addSubjects = function (subject) {
    $rootScope.subjectsWritten.push(subject);
    console.log($rootScope.subjectsWritten);
  }
  $rootScope.removeWrittenSubject =function (sub) {

    var index =  $rootScope.subjectsWritten.indexOf(sub);
    if (index !== -1) {
      $rootScope.subjectsWritten.splice(index, 1);
    }
  }
  test.getDate = function () {
    test.student.date = new Date();
  }

  test.saveTest = function (student) {
    test.student.subject= $rootScope.subjectsWritten;
    testService.save(student);
    $fancyModal.close();
  }


}]);
