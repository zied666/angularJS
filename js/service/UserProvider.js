app.service('UserFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        //users: false,
        all: function () {
            var users =[];
            var deferred = $q.defer();
            Post = $resource('https://jsonplaceholder.typicode.com/users');
            users = Post.query(function () {
                deferred.resolve(users);
            });
            return deferred.promise;
        },
        getPromise: function (id) {
            var deferred = $q.defer();
            user = {};
            if (id != undefined) {
                Post = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: id}, {
                    'query': {
                        method: 'GET',
                        isArray: false
                    }
                });
                user = Post.query(function () {
                    deferred.resolve(user);
                });
            }
            else
                deferred.resolve(user);
            return deferred.promise;
        },
        get: function (id) {
            if (id != undefined) {
                Post = $resource('https://jsonplaceholder.typicode.com/users/:id', {id: id}, {
                    'query': {
                        method: 'GET',
                        isArray: false
                    }
                });
                return Post.query();
            }
            else
                return {};
        }
    };
    return factory;
});