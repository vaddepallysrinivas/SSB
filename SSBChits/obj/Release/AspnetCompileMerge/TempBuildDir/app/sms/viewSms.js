'use strict';

angular.module('ssb').controller('viewSms', viewSms);
viewSms.$inject = ['$state', '$scope', 'uiGridConstants', 'params', '$modalInstance', 'viewSmsService'];

function viewSms($state, $scope, uiGridConstants, params, $modalInstance, viewSmsService) {


    var vm = {
        model: {},
        init: init,
        close: close,
        sendSms: sendSms
    };
    vm.model.progressBarValue = 0;
    vm.model.buttonsShow=true
    init();

    return vm;

    function init() {

        vm.gridViewSms = {
            enableColumnResizing: true,
            enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableRowSelection: true,
            enableFiltering: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            rowHeight: 35,
            showGridFooter: true,

            columnDefs: [
               { name: 'Phnumber', displayName: "Phnumber", width: '20%' },
               { name: 'Name', displayName: "Name", width: '20%' },
               { name: 'Message', displayName: "Message", width: '50%' }
            ]

        }
        vm.gridViewSms.data = params;
    }




    function close() {
        $modalInstance.dismiss();
    }

    function sendSms()
    {
       
        vm.model.progressBarValue = 0;
   

            vm.model.buttonsShow = false;
            for (var i = vm.model.progressBarValue; i <= 60; i++) {
                vm.model.progressBarValue = i;
            }
            var objParam = { lst: params }
            viewSmsService.sendSms(objParam).then(function (res) {
                if (res.data == 1) {

                    for (var i = vm.model.progressBarValue; i <= 100; i++) {
                        vm.model.progressBarValue = i;
                      
                    }
                 //   vm.model.progressBarValue="SMS Sent SuccessFully......"
                    vm.model.buttonsShow = true;
                }

            });
        
        
    }

    function increment(k) {

        for (var i = vm.model.progressBarValue; i <= 100; i++) {
            vm.model.progressBarValue = i;
        }
    }

}

