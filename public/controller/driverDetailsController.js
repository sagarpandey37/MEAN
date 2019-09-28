app.controller("driverDetailsController", function ($scope, $localStorage, xoloCarfactory) {


	$scope.getDriverDataFromLocalStorage = function () {

		$scope.DriverData = $localStorage.driverData;
	}

	$scope.bookCar = function (event) {

		for (driverdata of $localStorage.driverData) {
			if (driverdata['carNumber'] == event.target.value) {
				$localStorage.driverData = driverdata; // Store selected driver by user and check for login
			}
		}
		xoloCarfactory.redirectToLoginPage();
	}



	$scope.getDriverDataFromLocalStorage();

})
