app.config(function ($routeProvider, $locationProvider, ONEWAY, ROUNDTRIP, MULTICITY, DRIVER_DEATILS, LOGIN, PAYMENT) {
    $locationProvider.hashPrefix('');
    $routeProvider.when(ONEWAY, {
        templateUrl: "./views/oneWay.html",
        controller: "xoloCarController"
    }).when(DRIVER_DEATILS, {
        templateUrl: "./views/driverDetails.html",
        controller: "driverDetailsController"
    }).when(ROUNDTRIP, {
        templateUrl: "./views/roundTrip.html",
        controller: ""
    }).when(MULTICITY, {
        templateUrl: "./views/multiCity.html",
        controller: ""
    }).when(LOGIN, {
        templateUrl: "./views/loginPage.html",
        controller: "userLoginController"
    }).when(PAYMENT, {
        templateUrl: "./views/paymentPage.html",
        controller: "paymentController"
    }).otherwise({
        template: "Error Page , No Match Found",
        redirectTo: "/"
    });
});
