// Directives
(function () {
    let weatherReportDirective = function () {
        return {
            restrict: 'E',
            // template: '<div class="panel panel-default">\n' +
            //     '    <div class="panel-heading">\n' +
            //     '        <h3 class="panel-title">{{ convertToDate({ date: weatherDay .dt}) | date: dateFormat }}</h3>\n' +
            //     '    </div>\n' +
            //     '    <div class="panel-body">\n' +
            //     '        Daytime Temperature: {{ convertToStandard({dayTimeTemp: weatherDay.main.temp}) }}&#8451\n' +
            //     '    </div>\n' +
            //     '</div>',
            templateUrl: "directives/weather-report.html",
            replace: true,
            scope: {
                weatherDay: "=",
                convertToStandard: "&",
                convertToDate: "&",
                dateFormat: "@"
            }
        }
    };

    weatherApp.directive("weatherReport", weatherReportDirective);
}());