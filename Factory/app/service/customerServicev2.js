(function() {
    let customersService = function($http) {

        this.getCustomers = function() {
            return $http.get('/customers');
        };

        this.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        }
    }

    angular.module("customersApp").service("customersService", customersService);
}());