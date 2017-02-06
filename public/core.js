// public/core.js
var toyswap = angular.module('toyswap', []);

toyswap.controller('mainController',function($scope, $http) {

  // when landing on the page, get all toys and show them
  $http.get('/toys')
      .then(function(response) {
          $scope.toys = response.data;

          
      });
});
