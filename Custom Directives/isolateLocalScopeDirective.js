// Isolate Scope with String Directive
(function() {
    let isolateScopeDirective = function() {
        return {
            scope: {
                name: "@"
            },
            template: "Name: {{ name }}"
        };
    };

    angular.module("customersApp").directive("isolateScopeWithString", isolateScopeDirective);
}());


// Isolate Scope with Object Directive
(function() {
    let isolateScopeDirectiveWithObject = function() {
        return {
            scope: {
                datasource: "="
            },
            template: 'Name: {{ datasource.name }} Street: {{ datasource.street }}' + 
                      '<br/> <button ng-click="datasource.name=\'Fred\'">' +
                      'Change</button>'
        };
    };

    angular.module("customersApp").directive("isolateScopeWithObject", isolateScopeDirectiveWithObject);
}());


// Isolate Scope with Event Directive
(function() {
    let isolateScopeDirectiveWithEvent = function() {
        return {
            scope: {
                datasource: "=",
                action: "&"
            },
            template: "Name: {{ datasource.name }} Street: {{ datasource.street }}" + "<br/>" +
                      "<button ng-click='action()'> Change Data </button>"
        };
    };

    angular.module("customersApp").directive("isolateScopeWithEvent", isolateScopeDirectiveWithEvent);
}());


// Directive using the link() function
(function() {
    let linkDemo = function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                element.on("click", function() {
                    element.html("You Clicked me !!!");
                });
                element.on("mouseenter", function() {
                    element.css("background-color", "yellow");
                });
                element.on("mouseleave", function() {
                    element.css("background-color", "white");
                });
            }
        };
    };

    angular.module("customersApp").directive("linkDemo", linkDemo);

}());