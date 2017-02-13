// public/core.js
var toyswap = angular.module('toyswap', ["ngRoute"]);


// ...................................... ROUTING ........................

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
