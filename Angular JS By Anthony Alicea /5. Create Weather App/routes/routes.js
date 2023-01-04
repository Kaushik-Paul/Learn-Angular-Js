// Routing
(function () {
    let routerConfig = function ($routeProvider, $sceProvider) {
        // $sceProvider.enabled(false);
        // $sceDelegateProvider.resourceUrlWhitelist(
        //     [
        //         "self",
        //         "http://api.openweathermap.org/data/2.5/weather**",
        //     ]
        // );
        // $sce.getTrustedResourceUrl("*")

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
    };
    weatherApp.config(routerConfig);
}());