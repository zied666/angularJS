app.controller('PostsController', function ($scope, $rootScope, PostFactory) {
    $rootScope.loading = true;
    $scope.newPost = {};
    $scope.order = "id";
    var firstElement = 0;
    var limit = 5;
    var lastElement = 5;
    PostFactory.limit(0, 5).then(function (posts) {
        $rootScope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    });
    $scope.loadMorePost = function () {
        firstElement += limit;
        lastElement += limit;
        $scope.morePostLoading = true;
        PostFactory.limit(firstElement, lastElement).then(function (data) {
            $scope.posts = $scope.posts.concat(data);
            $scope.morePostLoading = false;
        }, function (msg) {
            alert(msg);
        });
    };
    $scope.addComment = function () {
        $scope.posts.push($scope.newPost);
        $scope.newPost = {};
        PostFactory.add($scope.newPost).then(
            function () {

            },
            function () {
                alert("Votre post n'a pas pu etre sauvgarder");
            }
        );
    }
});

app.controller('PostController', function ($scope, $rootScope, PostFactory, $routeParams) {
    $rootScope.loading = true;
    PostFactory.get($routeParams.id).then(function (post) {
        $rootScope.loading = false;
        $scope.post = post;
    }, function (msg) {
        alert(msg);
    });
});