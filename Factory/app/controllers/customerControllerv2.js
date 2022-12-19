(function() {
    
    let CustomersController = function ($scope, $log, customersService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;


        function init() {
            customersService.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    // Handle error
                    $log.log(data.error + " " + status);
                });
        }
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());