'use strict';

angular.module('ssb').controller('bulkPramotinal', bulkPramotinal);
bulkPramotinal.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function bulkPramotinal($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        init: init,
        reset: reset,
        bindRowData: bindRowData,
        view: view,
        getGridColumns: getGridColumns
    };
    vm.gridOptions = {};


    init();

    return vm;
    function reset() {
        vm.gridOptions.data = [];
    }


    function bindRowData() {
    }


    function messageSelected1() {

        var selectedRows = vm.model.gridApi.selection.getSelectedRows();
        var paramsData = [];

        for (var i = 0; i < selectedRows.length; i++) {

            var message = ''

            var field1 = selectedRows[i].Phnumber;
            var field2 = selectedRows[i].Name;
            var field3 = selectedRows[i].Message



            //Dear Subscriber, Received #field1# On #field2# vide T.R.No.#field3#, by Cash.SREELAXMI SAI BAALAJI CHITS.KNR
            message = field3;

            var param = {
                Phnumber: field1,
                Name: field2,
                Message: message
            }
            paramsData.push(param);

        }


        return paramsData;
    }

    function view() {

        var paramsData = [];
        paramsData = messageSelected1();
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


    function init() {
        reset();
        getGridColumns();
        vm.gridOptions = {
            enableColumnResizing: true,
            enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableRowSelection: true,
            enableFiltering: true,
            enableSelectAll: true,
            rowHeight: 35,
            showGridFooter: true,
            onRegisterApi: function (gridApi) {
                vm.model.gridApi = gridApi;
                vm.model.gridApi.selection.on.rowSelectionChanged($scope, bindRowData);
            },
            columnDefs: vm.gridOptions.columnDefs
        }
    }





    function getGridColumns() {
        vm.model.columms = [];
        reset();
        vm.model.columms = [
             { name: 'Phnumber', displayName: "Phnumber" },
             { name: 'Name', displayName: "Name" },
             { name: 'Message', displayName: "Message" }
        ]
        vm.gridOptions.columnDefs = vm.model.columms;

    }
}

