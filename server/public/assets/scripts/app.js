var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", "$http", function($scope, $http){
  $scope.getPeople = function(){
    $http.get("/kappans").then(function(response){
      $scope.studentPackage = response.data.students;
      console.log(response.data.students);
      
    });
  };
  $scope.getPeople();

}]);


console.log("Hey, this works");
