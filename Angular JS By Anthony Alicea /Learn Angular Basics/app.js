let myApp = angular.module("myApp", []);

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
    let mainController = function ($scope, $log, $timeout, $filter) {
        $scope.firstname = "John Doe";
        console.log($scope);
        $log.log("Hello World Log !!");
        $log.info("Hello World Info !!");
        $log.debug("Hello World Debug !!");
        $log.warn("Hello World Warn !!");
        $log.error("Hello World Error !!");

        $timeout(function () {
            $scope.firstname = "Everybody";
        }, 3000);

        // Two way directive
        $scope.handle = "";
        $scope.lowerCaseHandle = function () {
            return $filter("lowercase")($scope.handle);
            // return $scope.handle.toLowerCase();
        };

        // In case want to use the default javascript function
        // Need to specify so that Angular is aware that there is a change in the scope
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.handle = "newtwitterhandle";
                console.log("Value Changed");
            });
        }, 3000);

        // Common Directives
        $scope.characters = 5;
        // Some common directives include = ng-if, ng-show, ng-hide, ng-class, ng-repeat, ng-cloak
        $scope.showWhenMoreThan5Characters = "handle.length > characters"
        $scope.rules = [
            {ruleName: "Must be 5 characters long"},
            {ruleName: "Must not be used anywhere else"},
            {ruleName: "Must be cool"},
        ]

    };
    myApp.controller("mainController", ["$scope", "$log", "$timeout", "$filter", mainController]);
}());