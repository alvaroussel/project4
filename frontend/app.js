angular
    .module("myApp", ["satellizer"])
    .config( function ($authProvider, $stateProvider) {
        $authProvider.loginUrl = "http://localhost:3000/authenticate";
        $authProvider.signinUrl = "http://localhost:3000/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myApp";
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/index.html",
                controller:"HomeController"
            })
    });