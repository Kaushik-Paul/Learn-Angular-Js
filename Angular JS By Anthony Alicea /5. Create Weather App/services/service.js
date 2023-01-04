// Service
(function () {
    let cityService = function () {
        this.city = "New York, NY"
    }
    weatherApp.service("cityService", cityService);
}());