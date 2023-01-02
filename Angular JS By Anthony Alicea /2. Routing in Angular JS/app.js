let myApp = angular.module("mySecondApp", ["ngRoute"]);

(function () {
    let myRouterConfig = function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/main.html",
                controller: "mainController",
            })
            .when("/second/:num", {
                templateUrl: "pages/second.html",
                controller: "secondController",
            })
    }

    myApp.config(myRouterConfig);
}());

(function () {
    let mainController = function ($scope, $log) {

    };
    myApp.controller("mainController", ["$scope", "$log", mainController]);
}());

(function () {
    let secondController = function ($scope, $log, $routeParams) {
        $scope.num = $routeParams.num;
    };
    myApp.controller("secondController", ["$scope", "$log", "$routeParams", secondController]);
}());