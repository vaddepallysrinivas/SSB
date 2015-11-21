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

    function view() {

        var paramsData = [];
        paramsData = messageSelected1();
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
                        return paramsData;
                    }
                }
            });

    }


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

