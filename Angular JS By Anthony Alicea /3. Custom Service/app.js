let myApp = angular.module("mySecondApp", []);

// Custom Service
(function () {
    let nameService = function () {
        let self = this;
        this.name = "Tony Stark";
        this.nameLength = function () {
            return self.name.length;
        }
    };
    myApp.service("nameService", nameService);
}());



(function () {
    let mainController = function ($scope, $log, nameService) {
        $scope.firstName = "John Doe";
        $scope.newName = nameService.name;
        $scope.nameLength = nameService.nameLength();

        // Change the value of service everytime name changes
        $scope.$watch("newName", function () {
            nameService.name = $scope.newName;
            $log.log(`Service Name Updated: ${nameService.name}`);
        });
    };
    myApp.controller("mainController", ["$scope", "$log", "nameService", mainController]);
}());