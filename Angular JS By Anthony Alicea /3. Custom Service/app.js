let myApp = angular.module("mySecondApp", []);

(function () {
    let mainController = function ($scope, $log) {
        $scope.firstName = "John Doe";
    };
    myApp.controller("mainController", ["$scope", "$log", mainController]);
}());