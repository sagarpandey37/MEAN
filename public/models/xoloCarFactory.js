app.factory("xoloCarfactory", function ($http, $q, $window) {
    
    class Usersbooking{
        constructor(origin,destination,departDate){
            this.origin = origin;
            this.destination = destination;
            this.departDate = departDate;
            
        }
    }
    
    class Createusersinfo{
        constructor(name,phone,email){
            this.name = name;
            this.phone = phone;
            this.email = email;
            
        }
    }

    var Object = {
        
        driverDataFromServer : [],
        
        postBookingDetails: function (origin,destination,departDate) {
            var object = new Usersbooking(origin,destination,departDate);
            var deferred = $q.defer();
            $http({
                    url: Url.oneWayTrip,
                    method: 'post',
                    data: object,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (data) {
                    deferred.resolve({
                        data
                    });
                if(data.data){
                    $window.location.href = '#/oneway/drivers'}   
                })
                .catch(function (err) {

                    deferred.reject({
                        err
                    });
                });
            return deferred.promise;
        },
        
        redirectToLoginPage : function(){
            $window.location.href = '#/login'
        },
        
        createUser : function(name,phone,email){
            
            return new Createusersinfo(name,phone,email);
        }

    }

    return Object


})