var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope,$rootScope, $http,$window) {

    //get all student
    $http.get("http://localhost:8082/getAllStudent")
    .then(function(response) {
        $scope.students= response.data;       
    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });

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

     //delete by id
    $scope.deleteStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/deleteStudent/'+id,
                    }).then(function(response) {
                    	$window.location.href='http://localhost:8082';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
					};
	//view by id
	$scope.viewStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewStudent/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject',JSON.stringify(response.data));	
                    	// $window.location.href='http://localhost:8082/viewStudent';
                    
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                    
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewStudent2/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject2',JSON.stringify(response.data));	
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                    
                    	
                    
                };	
              $scope.students1=JSON.parse(localStorage.getItem('testObject'));
              $scope.students2=JSON.parse(localStorage.getItem('testObject2'));
                var range = [];
                for(var i=0;i<Object.size($scope.students2);i++) {
                  range.push(i);
                }
                $scope.size = range;
          $scope.reload=function()  {
          	$window.location.reload();
          } ;   
            //edit student
            // $scope.editStudent=function(id){
            //         $http({
            //             method : 'GET',
            //             url : 'http://localhost:8082/viewStudent/'+id,
            //         }).then(function(response) {
            //             $window.localStorage.setItem('editObject',JSON.stringify(response.data));   
            //             $window.location.href='http://localhost:8082/edit_student';
            //                 },function(errResponse){
            //                 console.error('Error while fetching Users');
            //                 deferred.reject(errResponse);
            //                 $scope.error='error getting'
            //             });
            // };
         // $scope.students3=JSON.parse(localStorage.getItem('editObject'));
         // console.log($scope.students3);


          $scope.editStudent2= function(student){
                   var student={
                		 studentid: $scope.students1.studentid,
                		 studentName: $scope.studentName,
                		 studentAge: $scope.studentAge,
                		 studentLocation: $scope.studentLocation
                	 };
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/edit_student/',
                         data: student
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });
                 };
         
});

	Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};