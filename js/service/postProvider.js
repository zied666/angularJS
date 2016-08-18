app.service('PostFactory', function ($http, $q, $timeout, $resource) {

    var Post = $resource('https://jsonplaceholder.typicode.com/posts');
    var factory = {
        posts: false,
        all: function () {
            var deferred = $q.defer();
            if (factory.posts != false) {
                deferred.resolve(factory.posts);
            }
            else {
                factory.posts = Post.query(function () {
                    deferred.resolve(factory.posts);
                });
            }
            return deferred.promise;
        },
        limit: function (offset,limit) {
            var deferred = $q.defer();
            if (factory.posts != false && false) {
                deferred.resolve(factory.posts.slice(offset,limit));
            }
            else {
                factory.posts = Post.query(function () {
                    deferred.resolve(factory.posts.slice(offset,limit));
                });
            }
            return deferred.promise;
        },
        get: function (id) {

            var deferred = $q.defer();
            var post = {};
            factory.all().then(function (posts) {
                angular.forEach(posts, function (value, key) {
                    if (value.id == id)
                        post = value;
                });
                deferred.resolve(post);
            }, function (msg) {
                deferred.reject("Impossible de récuperer les hôtels");
            });
            return deferred.promise;
        },
        add: function (newPost) {
            var deferred = $q.defer();
            var post = new Post;
            post.id = null;
            post.userId = 1;
            post.title = "zied";
            post.body = "zied";
            console.log(post.$save());
            deferred.resolve(post);
            return deferred.promise;
        }
    };
    return factory;
});