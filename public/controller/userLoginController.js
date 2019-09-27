app.controller("userLoginController", function ($scope,$localStorage,$window,xoloCarfactory) {
    
    if($localStorage.userData.length >0){
		let localstorageData = JSON.parse($localStorage.userData);
            $scope.username = localstorageData['name']
            $scope.email = localstorageData['email'];
            $scope.phone = localstorageData['phone'];
        }
      
    $scope.cabConfirmation = function(){
		let userObject = xoloCarfactory.createUser($scope.username,$scope.phone,$scope.email);
		$localStorage.userData = JSON.stringify(userObject);
        $window.location.href = '#/oneway/payment'
    }
    
})