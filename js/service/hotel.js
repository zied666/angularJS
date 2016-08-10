app.service('HotelFactory', function ($http, $q, $timeout, $resource) {

    var Post = $resource('https://jsonplaceholder.typicode.com/posts');
    var factory = {
        hotels: false,
        all: function () {
            var deferred = $q.defer();
            if (factory.hotels != false) {
                deferred.resolve(factory.hotels);
            }
            else {
                factory.hotels = Post.query(function () {
                    deferred.resolve(factory.hotels);
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
        add: function (newHotel) {
            var deferred = $q.defer();
            var hotel = new Post;
            hotel.id = null;
            hotel.userId = 1;
            hotel.title = "zied";
            hotel.body = "zied";
            console.log(hotel.$save());
            deferred.resolve(hotel);
            return deferred.promise;
        }
    };
    return factory;
});