var myApp = angular.module('myApp', []);
myApp.controller('myCtrl3', function($scope,$http,$window) {

            $scope.editStudent2= function(student){
                   var student={
                		studentName=$scope.studentName,
                		 studentid=$scope.studentid,
                		 studentAge=$scope.studentAge,
                		 studentLocation=$scope.studentLocation
                	 };
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/edit_student2/',
                         data:student
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             deferred.reject(errResponse);
                             $scope.error='error getting';
                                alert("fail")
                         });
                 };

	});