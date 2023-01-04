let weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

(function () {
    let mainController = function ($scope) {
        $scope.name = "John Doe";
    }

    weatherApp.controller("mainController", ["$scope", mainController]);
}());