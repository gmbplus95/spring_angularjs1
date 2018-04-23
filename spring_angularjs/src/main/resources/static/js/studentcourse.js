var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope,$rootScope, $http,$window) {
	var myJson ={};
    $http.get("http://localhost:8080/getAllStudent")
    .then(function(response) {
        $scope.students= response.data;       
    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });
     
    $scope.deleteStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8080/deleteStudent/'+id,
                    }).then(function(response) {
                    	$window.location.href='http://localhost:8080';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
					};

	$scope.viewStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8080/viewStudent/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject',JSON.stringify(response.data));	
                    	$window.location.href='http://localhost:8080/viewStudent';
                    
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                    
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8080/viewStudent2/'+id,
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
                for(var i=0;i<Object.keys($scope.students2).length;i++) {
                  range.push(i);
                }
                $scope.size = range;
                console.log($scope.size);
                
});