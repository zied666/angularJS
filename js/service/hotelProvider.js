app.factory('HotelFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        hotels: false,
        all: function () {
            var deferred = $q.defer();
            if (factory.hotels == false) {
                Post = $resource('http://os-travel.com/api/hotels', {}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
                factory.hotels = Post.query(function () {
                    deferred.resolve(factory.hotels);
                });
            }
            else
                deferred.resolve(factory.hotels);
            return deferred.promise;
        },
        get: function (id) {
            var deferred = $q.defer();
            hotel = {};
            Post = $resource('http://os-travel.com/api/hotels/:id', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            hotel = Post.query(function () {
                deferred.resolve(hotel);
            });
            return deferred.promise;
        }
    };
    return factory;
});