app.service('HotelFactory', function ($http, $q,$timeout) {

    var factory = {
        hotels: false,
        all: function () {
            var deferred = $q.defer();
            if(factory.hotels!=false)
            {
                deferred.resolve(factory.hotels);
            }
            else
            {
                $http
                    .get('js/hotels.json')
                    .success(function (data, status) {
                        factory.hotels = data;
                        $timeout(function () {
                            deferred.resolve(factory.hotels);
                        },500);
                    })
                    .error(function (data, status) {
                        deferred.reject("Impossible de récuperer les hôtels");
                    });
            }
            return deferred.promise;
        },
        get: function (id) {

            var deferred = $q.defer();
            var hotel = {};
            factory.all().then(function (hotels) {
                angular.forEach(hotels, function (value, key) {
                    if (value.id == id)
                        hotel = value;
                });
                deferred.resolve(hotel);
            }, function (msg) {
                deferred.reject("Impossible de récuperer les hôtels");
            });
            return deferred.promise;
        },
        add:function (newHotel) {
            var deferred = $q.defer();
            //....
            deferred.resolve(hotel);
            return deferred.promise;
        }
    };
    return factory;
});