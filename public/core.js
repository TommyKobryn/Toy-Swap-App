// public/core.js
var toyswap = angular.module('toyswap', ["ngRoute"]);

toyswap.controller('mainController',function($scope, $http) {

  // when landing on the page, get all toys and show them
  $http.get('/toys')
      .then(function(response) {
          $scope.toys = response.data;


      });
});

toyswap.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/addnew", {
        templateUrl : "views/addnew.html"
    })
    .otherwise('/');
});
