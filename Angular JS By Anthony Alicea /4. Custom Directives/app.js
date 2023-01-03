let myApp = angular.module("mySecondApp", []);

(function () {
    let mainController = function ($scope, $log) {
        $scope.firstName = "John Doe";
    };
    myApp.controller("mainController", ["$scope", "$log", mainController]);
}());

// Create custom directive
(function () {
    let searchResult = function () {
        return {
            restrict: "EACM", // Directives allowed E => Element, A => Attribute, C => Class, M => Comment
            // template: '<a href="#" class="list-group-item">\n' +
            //     '                        <h4 class="list-group-item-heading">Doe, John</h4>\n' +
            //     '                        <p class="list-group-item-text">\n' +
            //     '                            555 Main St., New York, NY 11111\n' +
            //     '                        </p>\n' +
            //     '                    </a>',
            templateUrl: "directives/search-result.html",
            replace: true // Replaces the html tag completely

        };
    };
    myApp.directive("searchResult", searchResult);

}());

