'use strict';

angular.module('ssb').controller('sendSms', sendSms);
sendSms.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function sendSms($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        init: init,
        reset: reset,
        bindRowData: bindRowData,
        view: view,
        message1: message1,
        message2: message2,
        smsTypeChange: smsTypeChange
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


    function messageSelected1() {

        var selectedRows = vm.model.gridApi.selection.getSelectedRows();
        var paramsData = [];

        for (var i = 0; i < selectedRows.length; i++) {

            var field1 = '';
            var field2 = '';
            var field3 = '';
            var field4 = '';
            var field5 = '';
            var field6 = '';


            field1 = '(' + selectedRows[i].GroupName + ')';
            field2 = ''
            if (selectedRows[i].Installment == 'undefined' && (selectedRows[i].Installment.length > 1)) {
                // if (selectedRows[i].Installment.length > 1) {
                field2 = 'Present Inst.(' + selectedRows[i].Installment + ')';

            }
            else {
                field2 = 'Previous';
            }

            field3 = selectedRows[i].Amount + '/-'
            field4 = selectedRows[i].DueDate;
            field5 = selectedRows[i].Phnumber;
            field6 = selectedRows[i].Name;
            var message = "SREELAXMI SAI BAALAJI CHITS: " + field1 + " Your " + field2 + " Due Amount is " + field3 + " as On " + field4 + " Ignore if Paid. For Details 9989800951";

            var param = {
                Phnumber: field5,
                Name: field6,
                Message: message
            }
            paramsData.push(param);

        }


        return paramsData;
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

        if (vm.smsType == 1) {
            paramsData = messageSelected1();
        }
        else if (vm.smsType == 2) {
            paramsData = messageSelected2();
        }


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

    function message1(row, col) {

        var field1 = '(' + row.entity.GroupName + ')';
        var field2 = ''

        if (row.entity.Installment == 'undefined' && row.entity.Installment.length > 1) {
            field2 = 'Present Inst.(' + row.entity.Installment + ')';
        }
        else {
            field2 = 'Previous';
        }

        var field3 = 'Rs.' + row.entity.Amount + '/-'
        var field4 = row.entity.DueDate

        return "SREELAXMI SAI BAALAJI CHITS: " + field1 + " Your " + field2 + " Due Amount is " + field3 + " as On " + field4 + " Ignore if Paid. For Details 9989800951";

        //'Name: ' + row.entity.Phnumber + ' groupName: ' + row.entity.GroupName;
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


        vm.model.smsTypes = [{ id: '1', name: 'SmsAction' }, { id: '2', name: 'SmsTransaction' }];
        reset();
        vm.gridOptions = {
            enableColumnResizing: true,
            enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            enableRowSelection: true,
            enableFiltering: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            rowHeight: 35,
            showGridFooter: true,
            onRegisterApi: function (gridApi) {
                vm.model.gridApi = gridApi;
                vm.model.gridApi.selection.on.rowSelectionChanged($scope, bindRowData);
            },
            columnDefs: []
        }



    }

    function smsTypeChange() {
        vm.model.columms = [];
        // vm.gridOptions = {};
        //vm.gridOption.data = {};
        reset();

        // $scope.$apply(function () {
        if (vm.smsType == 1) {
            vm.model.columms = [
               {
                   name: 'Phnumber', displayName: "Phnumber", enableCellEdit: true, cellTooltip: function (row, col) { return vm.message1(row, col) }

               },
               { name: 'Name', displayName: "Name", cellTooltip: function (row, col) { return vm.message1(row, col) } },
               { name: 'GroupName', displayName: "GroupName", cellTooltip: function (row, col) { return vm.message1(row, col) } },
               { name: 'Installment', displayName: "Installment", cellTooltip: function (row, col) { return vm.message1(row, col) } },
               { name: 'Amount', displayName: "Amount", cellTooltip: function (row, col) { return vm.message1(row, col) } },
               { name: 'DueDate', displayName: "DueDate", cellTooltip: function (row, col) { return vm.message1(row, col) } }
            ]



        }
        else if (vm.smsType == 2) {

            vm.model.columms = [
               {
                   name: 'Phnumber', displayName: "Phnumber", enableCellEdit: true, cellTooltip: function (row, col) { return vm.message2(row, col) }

               },
               { name: 'Name', displayName: "Name", cellTooltip: function (row, col) { return vm.message2(row, col) } },
                { name: 'Amount', displayName: "Amount", cellTooltip: function (row, col) { return vm.message2(row, col) } },
               { name: 'TransactionNo', displayName: "TransactionNo", cellTooltip: function (row, col) { return vm.message2(row, col) } },

               { name: 'DueDate', displayName: "DueDate", cellTooltip: function (row, col) { return vm.message2(row, col) } }
            ]
        }

        vm.gridOptions.columnDefs = vm.model.columms;


        // });


    }


}

