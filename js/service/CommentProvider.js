app.service('CommentFactory', function ($http, $q, $timeout, $resource) {

    var factory = {
        getByPostId: function (id) {
            var deferred = $q.defer();
            var comments=[];
            if(id!=undefined)
            {
                Post=$resource('https://jsonplaceholder.typicode.com/posts/:id/comments', {id:id}, {'query': {method: 'GET', isArray: true}});
                comments= Post.query(function () {
                    deferred.resolve(comments);
                });
            }
            else
                deferred.resolve(comments);
            return deferred.promise;
        },

        getCountByPostId: function (id) {
            var deferred = $q.defer();
            var comments=[];
            if(id!=undefined)
            {
                Post=$resource('https://jsonplaceholder.typicode.com/posts/:id/comments', {id:id}, {'query': {method: 'GET', isArray: true}});
                comments= Post.query(function () {
                    deferred.resolve(comments.length);
                });
            }
            else
                deferred.resolve(0);
            return deferred.promise;
        }
    };
    return factory;
});