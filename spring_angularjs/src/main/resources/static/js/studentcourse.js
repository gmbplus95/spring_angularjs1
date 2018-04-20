var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope, $http) {
    $http.get("http://localhost:8082/getAllStudent")
    .then(function(response) {
        $scope.students= response.data;
    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });
});

