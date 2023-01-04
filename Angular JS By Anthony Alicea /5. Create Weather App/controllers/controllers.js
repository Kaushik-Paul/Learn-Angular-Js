// Controllers
(function () {
    let mainController = function ($scope) {
        $scope.name = "John Doe";
    }

    weatherApp.controller("mainController", ["$scope", mainController]);
}());

(function () {
    let homeController = function ($scope, $location, cityService) {
        $scope.city = cityService.city;
        $scope.$watch("city", function () {
            cityService.city = $scope.city;
        });
        $scope.submit = function () {
            $location.path("/forecast");
        }
    }
    weatherApp.controller("homeController", ["$scope", "$location", "cityService", homeController]);
}());

(function () {
    let forecastController = function ($scope, $routeParams ,cityService, weatherService) {
        $scope.city = cityService.city;
        $scope.days = $routeParams.days || "2";

        // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather",
        //     {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        // $scope.weatherResult = $scope.weatherAPI.get({
        //     q: $scope.city,
        //     // cnt: $scope.days,
        //     appid: parseInt("55324c0fde2d3512be166559dc6fce73")
        // });
        // console.log($scope.weatherResult);

        $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

        // Convert Kelvin to Celsius
        $scope.convertFahrenheitToCelsius = function (degK) {
            return Math.round(degK - 273.15);
        }
        // Convert Epoch date to standard Date
        $scope.convertDate = function (dt) {
            return new Date(dt * 1000);
        }
    };
    weatherApp.controller("forecastController", ["$scope", "$routeParams", "cityService", "weatherService", forecastController]);
}());