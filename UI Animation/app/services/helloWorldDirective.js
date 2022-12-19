(function() {
    let helloWorldDirective = function() {
        return {
            template: "Hello World"
        };
    }
    angular.module("customersApp").directive("helloWorld", helloWorldDirective);

}());