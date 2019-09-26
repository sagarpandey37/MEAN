app.factory("xoloCarfactory", function ($http, $q, $window) {
    
    class Usersbooking{
        constructor(origin,destination,departDate,returnDate){
            this.origin = origin;
            this.destination = destination;
            this.departDate = departDate;
            this.returnDate = returnDate;
            
        }
    }

    var Object = {

        postBookingDetails: function (origin,destination,departDate,returnDate) {
            var object = new Usersbooking(origin,destination,departDate,returnDate);
            console.log(object)
            var deferred = $q.defer();
            $http({
                    url: Url.twoWayTrip,
                    method: 'post',
                    data: object,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (data) {

                    deferred.resolve({
                        data
                    });
                })
                .catch(function (err) {

                    deferred.reject({
                        err
                    });
                });
            return deferred.promise;
        }

    }

    return Object


})