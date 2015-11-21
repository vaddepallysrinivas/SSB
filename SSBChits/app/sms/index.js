'use strict';

angular.module('ssb').controller('index', index);
index.$inject = ['$state', '$scope', 'uiGridConstants', '$modal'];

function index($state, $scope, uiGridConstants, $modal) {


    var vm = {
        model: {},
        openModel: openModel

    };
 

    return vm;
    function openModel() {
        var modelInstance = $modal.open({

            templateUrl: "app/login/login.html",
            controller: "login",
            controllerAs: "vm",
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
          

        });
    }

   

    }


   


