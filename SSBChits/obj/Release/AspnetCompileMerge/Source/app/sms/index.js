'use strict';

angular.module('ssb').controller('index', index);
index.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function index($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        opemModel: opemModel

    };
 

    return vm;
    function opemModel() {
        var modelInstance = $modal.open({

            templateUrl: "app/sms/sendSms.html",
            controller: "sendSms",
            controllerAs: "vm",
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
          

        });
    }

   

    }


   


