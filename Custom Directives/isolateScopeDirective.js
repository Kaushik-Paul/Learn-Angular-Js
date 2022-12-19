// Normal Directive
(function() {
    let isolateScopeDirective = function() {
        return {
            scope: {},
            template: "Name: {{ customer.name }}, Street: {{ customer.street }}"
        };
    };

    angular.module("customersApp").directive("isolateScope", isolateScopeDirective);
}());
