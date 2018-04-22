var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope,$rootScope, $http,$window) {
	$scope.studentcopy =null;
    $http.get("http://localhost:8080/getAllStudent")
    .then(function(response) {
        $scope.students= response.data;
    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });

    $scope.viewStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8080/viewStudent/'+id,
                    }).then(function(response) {
        				$rootScope.students1= response.data;
        				console.log($rootScope.students1);
        					$window.location.href='http://localhost:8080/viewStudent';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});

                };
                
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

});