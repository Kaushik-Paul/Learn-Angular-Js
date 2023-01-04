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