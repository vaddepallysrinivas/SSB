'use strict';

angular.module('ssb').controller('login', login);
login.$inject = ['$state', '$scope', 'loginService'];

function login($state, $scope, loginService) {


    var vm = {
        model: {},
        clear: clear,
        autheniticate: autheniticate,
        init: init
    };
    init()
    return vm;


    function init() {
        vm.model.errorMsg = "";
        clear();
    }
    function autheniticate() {
        vm.model.errorMsg = '';
        var objParam = {
            userName: vm.model.userName,
            password: vm.model.password
        }

        validate();
        if (vm.model.errorMsg.length == 0) {
            loginService.autheniticate(objParam).then(function (res) {
                if (res.data == 1) {
                    vm.model.errorMsg = "";
                    $state.go('admin')
                }
                else if (res.data == 0) {
                    vm.model.errorMsg = "Invalid Username/Password";
                }

            });
        }

    }


    function validate() {

        if (vm.model.userName.trim().length <= 0 && vm.model.password.trim().length <= 0) {
            vm.model.errorMsg = "Enter UserName and password";
            angular.element('userName').trigger('focus');
        }
        else if (vm.model.userName.trim().length <= 0) {
            vm.model.errorMsg = "Enter UserName";
            angular.element('userName').trigger('focus');
        }
        else if (vm.model.password.trim().length <= 0) {
            vm.model.errorMsg = "Enter Password";
            angular.element('password').trigger('focus');
        }

    }
    function clear() {
        vm.model.userName = '';
        vm.model.password = '';

    }

}

