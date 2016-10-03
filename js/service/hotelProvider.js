app.factory('HotelFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        hotels: false,
        filtre: function (limit, offset, search) {
            var deferred = $q.defer();
            Post = $resource('http://os-travel.com/api/hotels', {
                limit: limit,
                offset: offset,
                search: search.name,
                orderBy: search.orderBy,
                order: search.order
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
        },
        getSaisons: function (id) {
            var deferred = $q.defer();
            saisons = [];
            Post = $resource('http://os-travel.com/api/hotels/:id/saisons', {id: id}, {
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