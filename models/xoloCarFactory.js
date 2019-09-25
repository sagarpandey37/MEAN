app.factory("xoloCarfactory", function ($http, $q, $window) {

    var Object = {

        get: function () {
            var deferred = $q.defer();
            $http({
                    url: Url.twoWayTrip,
                    method: 'post',
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