var myApp = angular.module('myApp', []);
myApp.controller('myCtrl2', function($scope,$http,$window) {

//                 $scope.createStudent= function(){
//                     $http({
//                         method : 'POST',
//                         url : 'http://localhost:8082/add_student/',
//                         params: {studentName: $scope.studentName,studentAge: $scope.studentAge,studentLocation: $scope.studentLocation}
//                     }).then(function(response) {
//                             $window.location.href='http://localhost:8082';
//                             console.log("thanh cong roi")
//                             },function(errresponse){
//                             deferred.reject(errResponse);
//                             $scope.error='error getting';
//                             	alert("failse")
//                         });
//                 };
//	$scope.createStudent=function(){
//			$scope.studentName='';
//			 $scope.studentAge='';
//			 $scope.studentLocation='';
//			alert("da them thanh cong");
//		};
});