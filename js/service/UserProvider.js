app.service('UserFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        currentUser: false,
        users: false,
        all: function () {
            var users = [];
            var deferred = $q.defer();
            if (factory.users == false) {
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
            var users = [];
            var deferred = $q.defer();
            if (factory.users == false) {
                Post = $resource('https://jsonplaceholder.typicode.com/users');
                factory.users = Post.query(function () {
                    deferred.resolve(factory.users.slice(0, i));
                });
            }
            else
                deferred.resolve(factory.users.slice(0, i));
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
        },
        login: function (email, password) {
            var deferred = $q.defer();
            $timeout(function () {
                if (email == "admin@gmail.com" && password == "admin")
                    deferred.resolve({
                        name: "Zied Kharraz",
                        email: "admin@gmail.com",
                        address: "Tunis centre ville",
                        phone: "+21653980209"
                    });
                else
                    deferred.resolve(false);
            }, 2000);
            return deferred.promise;
        },
        getToDos: function (id) {
            var todos = [];
            var deferred = $q.defer();
            Post = $resource('https://jsonplaceholder.typicode.com/users/:id/todos', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            todos = Post.query(function () {
                deferred.resolve(todos);
            });
            return deferred.promise;
        },
        getAlbums: function (id) {
            var albums = [];
            var deferred = $q.defer();
            Post = $resource('https://jsonplaceholder.typicode.com/users/:id/albums', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            albums = Post.query(function () {
                deferred.resolve(albums);
            });
            return deferred.promise;
        },
        getPhotos: function (id) {
            var photos = [];
            var deferred = $q.defer();
            Post = $resource('https://jsonplaceholder.typicode.com/albums/:id/photos', {id: id}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            photos = Post.query(function () {
                deferred.resolve(photos);
            });
            return deferred.promise;
        }
    };
    return factory;
});