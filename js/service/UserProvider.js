app.service('UserFactory', function ($http, $q, $timeout, $resource) {

    var Post = $resource('https://jsonplaceholder.typicode.com/users');
    var factory = {
        users: false,
        all: function () {
            var deferred = $q.defer();
            if (factory.users != false) {
                deferred.resolve(factory.users);
            }
            else {
                factory.users = Post.query(function () {
                    deferred.resolve(factory.users);
                });
            }
            return deferred.promise;
        },
        get: function (id) {
            if(id!=undefined)
            {
                Post=$resource('https://jsonplaceholder.typicode.com/users/:id', {id:id}, {'query': {method: 'GET', isArray: false}});
                return Post.query();
            }
            else
                return {};
        }
    };
    return factory;
});