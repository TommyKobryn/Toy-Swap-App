var toyswap = angular.module('toyswap');


toyswap.controller('mainController', ['$scope' , '$http' , '$location' , '$routeParams', function($scope , $http , $location , $routeParams){

$scope.getToys = function(){
 $http.get('/toys').then(function(response){
      $scope.toys = response.data;
    });
  };

$scope.name = null;
$scope.description = null;
$scope.age = null;
$scope.image = null;
$scope.lblMsg = null;
$scope.postdata = function (name, description, age, image) {
var data = {
name: name,
description: description,
age : age,
image : image
};
//Call the services
$http.post('/toys', JSON.stringify(data)).then(function (response) {
if (response.data)
window.location.href="#!/";
}, function (response) {
  console.log('Error has occured');
});
};

$scope.url = {
      text: 'example: http://combiboilersleeds.com/images/toy/toy-2.jpg'
    };


}]);
