app.controller("paymentController", function ($scope, moment, $localStorage, $window, xoloCarfactory) {

	$scope.timeValue = moment(new Date()).format('HH:mm');

	$scope.finalBooking = function () {

		if ($scope.departTime) {
			let time = moment({
				hour: new Date($scope.departTime).getHours(),
				minute: new Date($scope.departTime).getMinutes()
			}).format('HH:mm')

			$localStorage.finalBooking = {
				"address": $scope.address,
				"time": time
			};

		} else {

			let time = moment({
				hour: $scope.timeValue.toString().slice(0, 2),
				minute: $scope.timeValue.toString().slice(3)
			}).format('HH:mm')

			$localStorage.finalBooking = {
				"address": $scope.address,
				"time": time
			};
		}

		$window.location.href = '#/oneway/booking-confirmation'

	}

})
