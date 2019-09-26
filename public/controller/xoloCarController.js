app.controller("xoloCarController", function ($scope, moment, $mdDateLocale, xoloCarfactory) {

    $scope.minDate = new Date();
    $scope.origin = 'Bangalore'

    $scope.sendData = function () {
        let departDateInput = moment($scope.DepartDate).format('YYYY-MM-DD')
        let returnDateInput =  moment($scope.ReturnDate).format('YYYY-MM-DD')
        
        let promise = xoloCarfactory.postBookingDetails($scope.origin,$scope.destination,departDateInput);

        promise.then(success, error);

        function success(data) {
            console.log(data)
        }

        function error(er) {
            console.log(er);
        }

    }
})