app.service('UserFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        users: false,
        all: function () {
            var users =[];
            var deferred = $q.defer();
            if(factory.users==false)
            {
                Post = $resource('https://jsonplaceholder.typicode.com/users');
                factory.users = Post.query(function () {
                    deferred.resolve(factory.users);
                });
            }
            else
                deferred.resolve(factory.users);
            return deferred.promise;
        },
        limit: function (i) {
            var users =[];
            var deferred = $q.defer();
            if(factory.users==false)
            {
                Post = $resource('https://jsonplaceholder.typicode.com/users');
                factory.users = Post.query(function () {
                    deferred.resolve(factory.users.slice(0,i));
                });
            }
            else
                deferred.resolve(factory.users.slice(0,i));
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