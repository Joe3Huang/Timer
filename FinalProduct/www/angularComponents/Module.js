var myApp = angular.module('myApp', ["ngRoute"]);
myApp.directive('onReadFile',ReadFile);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
    })
    .when("/main", {
        templateUrl : "main.html",
    })
    .when("/login", {
        templateUrl : "login.html",
    })
    .when("/reportPage", {
        templateUrl : "reportPage.html",
    })
    .when("/projectPage", {
        templateUrl : "projectPage.html",
    });
})

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});