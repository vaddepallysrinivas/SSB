'use strict'

angular.module('ssb').factory('loginService', loginService);

loginService.$inject = ['$http'];

function loginService($http) {

    var service = {
        autheniticate: autheniticate
    
    };

    return service;


    function autheniticate(objParam) {
        var req = {
            method: "POST",
            url: 'sms/autheniticate/',
            data: objParam
        }
        return $http(req);
    }


   
}