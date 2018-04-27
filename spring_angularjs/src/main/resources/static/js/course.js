var myApp = angular.module('myApp', []);
myApp.controller('myCtrl3', function($scope, $http,$window) {

	//get all course
    $http.get("http://localhost:8082/getAllCourse")
    .then(function(response) {
        $scope.courses= response.data; 

    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });
    //get number of course's student
	$scope.noOfStudent=function(id){
    					$http({
                         method : 'GET',
                         url : 'http://localhost:8082/numberofStudent/'+ id
                     }).then(function(response) {
                    	 	$scope.sizes=response.data
                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });		
    };
    $scope.noOfStudent(1);
     //delete by id
    $scope.deleteCourse = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/deleteCourse/'+id,
                    }).then(function(response) {
                    	$window.location.href='http://localhost:8082/viewCourse';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
					};

	//add course
	$scope.addCourse= function(course){
                	 var course={
                		        courseid: $scope.studentid,
                		   		coursename:$scope.coursename
                		   	 };
             
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/add_course/',
                         data: course
        
					// params: {studentName: $scope.studentName,studentAge: $scope.studentAge,studentLocation: $scope.studentLocation}
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082/viewCourse';
                             console.log("thanh cong roi")
                             },function(errresponse){
                             deferred.reject(errResponse);
                             $scope.error='error getting';
                             	alert("failse")
                         });
                 };

     //view course
     
     	$scope.viewCourse = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewCourse/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject3',JSON.stringify(response.data));	
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                 
                };	
             $scope.courses1=JSON.parse(localStorage.getItem('testObject3'));
     //edit course

      $scope.editCourse= function(course){
                   var course={
                		 courseid: $scope.courses1.courseid, 
                		 coursename: $scope.coursename
                	 };
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/edit_course/',
                         data: course
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082/viewCourse';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });
                 };
    //get number of student

    

});