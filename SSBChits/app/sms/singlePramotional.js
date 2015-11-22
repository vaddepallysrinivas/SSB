'use strict';

angular.module('ssb').controller('singlePramotional', singlePramotional);
singlePramotional.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function singlePramotional($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        init:init,
        view: view,
        reset: reset,
        validate: reset
    };
    vm.gridOptions = {};

    vm.model.errorMsg = '';
    init();

    return vm;


    function view() {

        validate();

        if (vm.model.errorMsg.length == 0) {

            var paramsData = [];
            var message = ''
            var field1 = vm.model.mobileNo;
            var field2 = vm.model.name;
            var field3 = vm.model.message;
            message = field3;

            var param = {
                Phnumber: field1,
                Name: field2,
                Message: message
            }

            paramsData.push(param);

            var params = { paramsData: paramsData, smsType: 2 };



            var roleModalInstance;

            roleModalInstance = $modal.open(
                {
                    templateUrl: '/app/sms/viewSms.html',
                    controller: 'viewSms',
                    controllerAs: 'vm',
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        params: function () {
                            return params;
                        }
                    }
                });
        }

    }

    function init() {
        reset();


    }


    function reset() {

        vm.model.mobileNo = '';
        vm.model.name = '';
        vm.model.message = '';
        vm.model.errorMsg = '';
    }


    function validate() {

        vm.model.errorMsg = '';
        if (vm.model.mobileNo.trim().length <= 0) {
            vm.model.errorMsg = '  Enter MobileNo';
        }
        else if (vm.model.mobileNo.trim().length < 10) {
            vm.model.errorMsg += '   Length of mobileno should be 10 digits';
        }

        if (vm.model.name.trim().length <= 0) {
            vm.model.errorMsg +='  Enter Name';
        }


        if (vm.model.message.trim().length <= 0) {
            vm.model.errorMsg += '  Enter Message';
        }




    }
}

