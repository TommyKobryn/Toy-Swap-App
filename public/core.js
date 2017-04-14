// public/core.js
var toyswap = angular.module('toyswap', ["ngRoute"]);


// ...................................... ROUTING ........................

toyswap.config(function($routeProvider) {
    $routeProvider
    .when("/admin", {
        templateUrl : "views/main.html"
    })
    .when("/addnew", {
        templateUrl : "views/addnew.html"
    })
    .when("/delete", {
        templateUrl : "views/delete.html"
    })
    .otherwise('/admin');
});
