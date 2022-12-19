(function() {
    let app = angular.module("customersApp", ['ngRoute']);

    // Configure Route
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "CustomersController",
                templateUrl: "customers.html"
            })
            .otherwise({redirectTo: "/"});
    })
}());
