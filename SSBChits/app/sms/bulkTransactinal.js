'use strict';

angular.module('ssb').controller('bulkTransactinal', bulkTransactinal);
bulkTransactinal.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function bulkTransactinal($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        init: init,
        reset: reset,
        bindRowData: bindRowData,
        view: view,
        message2: message2,
        getGridColumns: getGridColumns
    };
    vm.gridOptions = {};


    init();

    return vm;
    function reset() {
        vm.gridOptions.data = [];
        //vm.gridOptions.columnDefs = [];
    }


    function bindRowData() {
    }



    function messageSelected2() {

        var selectedRows = vm.model.gridApi.selection.getSelectedRows();
        var paramsData = [];

        for (var i = 0; i < selectedRows.length; i++) {

            var message = ''
            var field1 = 'Rs.' + selectedRows[i].Amount + '/-';
            var field2 = selectedRows[i].DueDate;
            var field3 = selectedRows[i].TransactionNo;
            var field4 = selectedRows[i].Phnumber;
            var field5 = selectedRows[i].Name;




            //Dear Subscriber, Received #field1# On #field2# vide T.R.No.#field3#, by Cash.SREELAXMI SAI BAALAJI CHITS.KNR
            message = "Dear Subscriber, Received " + field1 + " On " + field2 + " vide T.R.No." + field3 + ", by Cash.SREELAXMI SAI BAALAJI CHITS.KNR";

            var param = {
                Phnumber: field4,
                Name: field5,
                Message: message
            }
            paramsData.push(param);

        }


        return paramsData;
    }






    function view() {


        var paramsData = [];


        paramsData = messageSelected2();

        var params = { paramsData: paramsData};



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



    function message2(row, col) {
        // Dear Subscriber, Received #field1# On #field2# vide T.R.No.#field3#, by Cash.SREELAXMI SAI BAALAJI CHITS.KNR


        var message = ''
        var field1 = 'Rs.' + row.entity.Amount + '/-';
        var field2 = row.entity.DueDate;
        var field3 = row.entity.TransactionNo;





        //Dear Subscriber, Received #field1# On #field2# vide T.R.No.#field3#, by Cash.SREELAXMI SAI BAALAJI CHITS.KNR
        message = "Dear Subscriber, Received " + field1 + " On " + field2 + " vide T.R.No." + field3 + ", by Cash.SREELAXMI SAI BAALAJI CHITS.KNR";


        return message;

        //'Name: ' + row.entity.Phnumber + ' groupName: ' + row.entity.GroupName;
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
            //selectionRowHeaderWidth: 35,
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
              {
                  name: 'Phnumber', displayName: "Phnumber", enableCellEdit: true, cellTooltip: function (row, col) { return vm.message2(row, col) }

              },
              { name: 'Name', displayName: "Name", cellTooltip: function (row, col) { return vm.message2(row, col) } },
               { name: 'Amount', displayName: "Amount", cellTooltip: function (row, col) { return vm.message2(row, col) } },
              { name: 'TransactionNo', displayName: "TransactionNo", cellTooltip: function (row, col) { return vm.message2(row, col) } },

              { name: 'DueDate', displayName: "DueDate", cellTooltip: function (row, col) { return vm.message2(row, col) } }
        ]




        vm.gridOptions.columnDefs = vm.model.columms;


        // });


    }


}

