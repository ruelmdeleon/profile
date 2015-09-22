'use strict';

// Declare app level module which depends on views, and components
angular.module('profileApp', [
    'ngRoute',
    'profileApp.version'
])
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/work', {
                templateUrl: 'templates/pages/workhistory/index.html',
                controller: 'WorkIndexController',
                controllerAs: 'workIndexCtrl'
            })
            .when('/company/:id', {
                templateUrl: 'templates/pages/company/profile.html',
                controller: 'CompanyViewController',
                controllerAs: 'companyViewCtrl'
            })
            .otherwise({
                templateUrl: 'templates/pages/workhistory/index.html',
                controller: 'WorkIndexController',
                controllerAs: 'workIndexCtrl'
            });
}]);
