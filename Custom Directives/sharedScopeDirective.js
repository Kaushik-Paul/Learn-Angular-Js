(function() {
    let sharedScopeDirective = function() {
        return {
            template: "Name: {{ customer.name }}, Street: {{ customer.street }}"
        };
    };

    angular.module("customersApp").directive("sharedScope", sharedScopeDirective);
}());