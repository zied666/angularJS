app.factory('HotelFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        hotels: false,
        all: function (limit, offset) {
            var deferred = $q.defer();
            Post = $resource('http://localhost/ostravel/web/api/hotels?limit=:limit&offset=:offset', {
                limit: limit,
                offset: offset
            }, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            factory.hotels = Post.query(function () {
                deferred.resolve(factory.hotels);
            });
            return deferred.promise;
        },
        get: function (id) {
            var deferred = $q.defer();
            hotel = {};
            Post = $resource('http://localhost/ostravel/web/api/hotels/:id', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            hotel = Post.query(function () {
                deferred.resolve(hotel);
            });
            return deferred.promise;
        },
        getSaisons: function (id) {
            var deferred = $q.defer();
            saisons = [];
            Post = $resource('http://localhost/ostravel/web/api/hotels/:id/saisons', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            saisons = Post.query(function () {
                deferred.resolve(saisons);
            });
            return deferred.promise;
        }
    };
    return factory;
});