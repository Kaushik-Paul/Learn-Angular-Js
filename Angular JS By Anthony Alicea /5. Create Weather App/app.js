let weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

// Routing
(function () {
    let routerConfig = function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home-page.html",
                controller: "homeController"
            })
            .when("/forecast", {
                templateUrl: "pages/forecast-page.html",
                controller: "forecastController"
            })
    }
    weatherApp.config(routerConfig);
}());

// Service
(function () {
    let cityService = function () {
        this.city = "New York, NY"
    }
    weatherApp.service("cityService", cityService);
}());


// Controllers
(function () {
    let mainController = function ($scope) {
        $scope.name = "John Doe";
    }

    weatherApp.controller("mainController", ["$scope", mainController]);
}());

(function () {
    let homeController = function ($scope, cityService) {
        $scope.city = cityService.city;
        $scope.$watch("city", function () {
            cityService.city = $scope.city;
        })
    }
    weatherApp.controller("homeController", ["$scope", "cityService", homeController]);
}());

(function () {
    let forecastController = function ($scope, cityService) {
        $scope.city = cityService.city;
    }
    weatherApp.controller("forecastController", ["$scope", "cityService", forecastController]);
}());