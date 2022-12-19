(function() {
    
    var OrdersController = function ($scope, $routeParams, customersService) {
        var customerId = $routeParams.customerId;
        $scope.customer = {};
        $scope.customers = []
        
        function init() {
            $scope.customers = customersService.getCustomers();
            $scope.customer = customersService.getCustomer(customerId);
        }
        
        init();
    };

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());