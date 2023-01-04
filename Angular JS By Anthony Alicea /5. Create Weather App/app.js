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
            .when("/forecast/:days", {
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
    let forecastController = function ($scope, $resource, $routeParams ,cityService) {
        $scope.city = cityService.city;
        $scope.days = $routeParams.days || "2";
        $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily",
            {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            cnt: $scope.days,
            appid: "55324c0fde2d3512be166559dc6fce73"
        });
        console.log($scope.weatherResult);

        // Convert Kelvin to Fahrenheit
        $scope.convertFahrenheitToCelsius = function (degK) {
            return Math.round((1.8 * (degK - 273)) + 32);
        }
        // Convert Epoch date to standard Date
        $scope.convertDate = function (dt) {
            return new Date(dt * 1000);
        }
    };
    weatherApp.controller("forecastController", ["$scope", "$resource", "$routeParams", "cityService", forecastController]);
}());