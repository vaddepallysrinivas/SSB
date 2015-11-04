(function () {
    'use strict';
    angular.module('ssb').directive("fileread", [function () {
        return {
            scope: {
                opts: '='
            },
            link: function ($scope, $elm, $attrs) {
                $elm.on('change', function (changeEvent) {

                   // alert($scope.smsType);
                    var reader = new FileReader();

                    reader.onload = function (evt) {
                        $scope.$apply(function () {
                            var data = evt.target.result;

                            var workbook = XLSX.read(data, { type: 'binary' });

                            var headerNames = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 })[0];

                            var data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

                           //  $scope.opts.columnDefs = [];

                            //headerNames.forEach(function (h) {
                            //    $scope.opts.columnDefs.push({ field: h });
                            //});

                            //$scope.opts.columnDefs = [
                            //{
                            //    name: 'Phnumber', displayName: "Phnumber", cellTooltip:
                            //    function (row, col) {
                            //        return 'Name: ' + row.entity.Phnumber + ' groupName: ' + row.entity.GroupName;
                            //    }
                            //},
                            //{ name: 'Name', displayName: "Name" },
                            //{ name: 'GroupName', displayName: "GroupName" },
                            //{ name: 'Installment', displayName: "Installment" },
                            //{ name: 'Amount', displayName: "Amount" },
                            //{ name: 'DueDate', displayName: "DueDate" }
                            //]


                            $scope.opts.data = data;

                            $elm.val(null);
                        });
                    };

                    reader.readAsBinaryString(changeEvent.target.files[0]);
                });
            }
        }
    }])
}());