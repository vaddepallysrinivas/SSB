'use strict'

angular.module('ssb').factory('viewSmsService', viewSmsService);

viewSmsService.$inject = ['$http'];

function viewSmsService($http) {

    var service = {

        sendSms: sendSms,
        getCompensation: getCompensation     
    };

    return service;


    function sendSms(objParam) {
        var req = {
            method: "POST",
            url: 'sms/sendSms/',
            data: objParam
        }
        return $http(req);
    }


    function getCompensation() {
        return $http.get("dc/compensationData/getCompensationData/");
    }
}