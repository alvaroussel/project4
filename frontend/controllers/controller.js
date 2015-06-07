angular
    .module("App.controllers")
    .controller("LoginController", LoginController);

function LoginController ($auth, $location) {
    var vm = this;
    this.login = function () {
        $auth.login({
            emil: vm.email,
            password: vm.password
        })
        .then( function () {

        });
    }
}
