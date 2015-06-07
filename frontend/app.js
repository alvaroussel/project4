angular.module("App", ['satellizer', 'ui.router'])
    .config(function ($authProvider, $stateProvider) {
        $authProvider.loginUrl = "http://localhost:3000/login";
        $authProvider.signupUrl = "http://localhost:3000/signup";
        $authProvider.tokenName = "token";
        $authProvider.token = "App";
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/home.html"
            })
            .state("login", {
                url: "/login",
                templateUrl: "views/login.html"
            });
    })
	.controller("AppCtrl", function($scope) {
	   $scope.name = "Calvin Hobbes";
    });
