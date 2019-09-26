app.factory("xoloCarfactory", function ($http, $q, $window) {
    
    class Usersbooking{
        constructor(origin,destination,departDate){
            this.origin = origin;
            this.destination = destination;
            this.departDate = departDate;
            
        }
    }

    var Object = {

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