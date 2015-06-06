angular
    .module("myApp.controllers")
    .controller("SignUpController", SignUpController)
    .controller("LoginController", LoginController)
    .controller("LogoutController", LogoutController);

function SignUpController ($auth, $location) {
    var vm = this;
    this.signup = function () {
        $auth.signup({
            
        });
    }
}