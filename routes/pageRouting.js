app.config(function ($routeProvider, $locationProvider, ONEWAY, ROUNDTRIP, MULTICITY) {
    $locationProvider.hashPrefix('');
    $routeProvider.when(ONEWAY, {
        templateUrl: "./views/oneWay.html",
        controller: ""
    }).when(ROUNDTRIP, {
        templateUrl: "../views/roundTrip.html",
        controller: ""
    }).when(MULTICITY, {
        templateUrl: "../views/multiCity.html",
        controller: ""
    }).otherwise({
        template: "Error Page , No Match Found",
        redirectTo: "/"
    });
});
