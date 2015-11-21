

'use strict';
angular.module('ssb').config(appRoute);

appRoute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function appRoute($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "/page1");

    $stateProvider
       .state("page1", {
           url: "/page1",
           templateUrl: "app/sms/Index1.html"
       })
       .state("page2", {
           url: "/page2",
           title: "sensSMS",
           templateUrl: "app/sms/sendSms.html",
           controller: "sendSms",
           controllerAs: "vm"
       })
.state("login", {
    url: "/login",
    templateUrl: "app/login/login.html",
    controller: "login",
    controllerAs: "vm"
})
    .state("admin", {
        url: "/admin",
        templateUrl: "app/admin/admin.html"
        // controller: "login",
        // controllerAs: "vm"
    })
    .state("admin.bulkAction", {
        url: "/bulkAction",
        templateUrl: "app/sms/bulkAction.html",
        controller: "bulkAction",
        controllerAs: "vm"
    })
     .state("admin.bulkTransactinal", {
         url: "/bulkTransactinal",
         templateUrl: "app/sms/bulkTransactinal.html",
         controller: "bulkTransactinal",
         controllerAs: "vm"
     })
    .state("admin.bulkPramotinal", {
        url: "/bulkPramotinal",
        templateUrl: "app/sms/bulkPramotinal.html",
        controller: "bulkPramotinal",
        controllerAs: "vm"
    });
    
    //committees bulkTransactinal
    // $locationProvider.html5Mode(true);

    //$urlRouterProvider.when('', '/')
    // $urlRouterProvider.when(window.virtualDirectory + '/', $state.go("dashboard"));

    //$urlRouterProvider.otherwise(function ($injector, $location) {
    //    $injector.invoke(['$state', function ($state) {
    //        $state.go('page1');
    //    }]);
    //});

}