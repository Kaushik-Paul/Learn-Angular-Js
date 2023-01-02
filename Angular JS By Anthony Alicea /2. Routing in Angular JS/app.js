let myApp = angular.module("mySecondApp", ["ngRoute"]);

// (function () {
//     let mainController = function ($scope, $log) {
//         $scope.firstname = "John Doe";
//         console.log($scope);
//         $log.log("Hello World Log !!");
//         $log.info("Hello World Info !!");
//         $log.debug("Hello World Debug !!");
//         $log.warn("Hello World Warn !!");
//         $log.error("Hello World Error !!");
//     };
//     myApp.controller("mainController", mainController);
// }());


// OR
// To save against minifier
(function () {
    let mainController = function ($scope, $log) {

    };
    myApp.controller("mainController", ["$scope", "$log", mainController]);
}());