// Option 1
// Using global variable

// let app = angular.module("customersApp", [])

// app.controller("CustomersController", function($scope){
//     // Give default values
//     $scope.sortBy = 'name';
//     $scope.reverse = false;

//     $scope.customers = [
//         { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
//         { joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99 },
//         { joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99 },
//         { joined: '1995-03-28', name: 'David', city: 'Seattle', orderTotal: 101.50 }
//     ];

//     $scope.doSort = function (propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//     };
// });



// Option 2 
// Not using global variable
(function() {
    let app = angular.module("customersApp", []);
}());

(function() {
    let customersController = function($scope){
        // Give default values
        $scope.sortBy = 'name';
        $scope.reverse = false;
    
        $scope.customers = [
            { joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956 },
            { joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99 },
            { joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99 },
            { joined: '1995-03-28', name: 'David', city: 'Seattle', orderTotal: 101.50 }
        ];
    
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    }

    angular.module("customersApp").controller("CustomersController", customersController);
}());
