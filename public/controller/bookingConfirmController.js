app.controller("bookingController", function ($scope, $localStorage, $window, xoloCarfactory) {

	let userData = JSON.parse($localStorage.userData);
	let driverData = $localStorage.driverData;
	let finalBooking = $localStorage.finalBooking;

	let finalObject = {};

	angular.extend(finalObject, userData, driverData, finalBooking);

	$scope.Date = finalObject.departDate;
	$scope.Time = finalObject.time;
	$scope.Origin = finalObject.origin;
	$scope.Destination = finalObject.destination;
	$scope.Address = finalObject.address;
	$scope.CarType = finalObject.carType;
	$scope.CarNumber = finalObject.carNumber;
	$scope.Driver = finalObject.driverName;
	$scope.Language = finalObject.language;
	$scope.Fare = finalObject.fare;
	
	
	$scope.goHome = function(){
		$window.location.href = '/'
	}

})
