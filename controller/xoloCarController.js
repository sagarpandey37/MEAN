app.controller("xoloCarController", function ($scope, moment, $mdDateLocale, xoloCarfactory) {

//    $scope.departDate = new Date();
//    $scope.returnDate = new Date();

   

    $scope.sendData = function () {
        var departDateInput = $scope.departDate
        var destDateInput = $scope.returnDate
        console.log(departDateInput)
        console.log(destDateInput)
//        var promise = xoloCarfactory.sendData();
//
//        promise.then(success, error);
//
//        function success(data) {
//            console.log(data)
//        }
//
//        function error(er) {
//            console.log(er);
//        }

    }
})