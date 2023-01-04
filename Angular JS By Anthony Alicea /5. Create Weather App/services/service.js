// Service
(function () {
    let cityService = function () {
        this.city = "New York"
    }
    weatherApp.service("cityService", cityService);
}());

(function () {
    let weatherService = function ($resource) {
        this.getWeather = function (city, days) {
            let weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
            let weatherAPI = $resource(weatherUrl);

            let weatherResult = weatherAPI.get({
                q: city,
                // cnt: days,
                appid: "55324c0fde2d3512be166559dc6fce73"
            });

            console.log(weatherResult);
            return weatherResult;
        }
    }
    weatherApp.service("weatherService", ["$resource", weatherService]);
}());