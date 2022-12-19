(function() {
    
    var OrdersController = function ($scope, $routeParams, customersService) {
        var customerId = $routeParams.customerId;
        $scope.customer = {};
        $scope.customers = []
        
        function init() {
            customersService.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    // Handle error
                });
        }
        
        init();
    };

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());