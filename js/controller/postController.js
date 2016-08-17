app.controller('PostsController', function ($scope,$rootScope, PostFactory) {
    $rootScope.loading = true;
    $scope.newPost = {};
    PostFactory.all().then(function (posts) {
        $rootScope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    });
    $scope.addComment=function () {
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

app.controller('PostController', function ($scope,$rootScope, PostFactory, $routeParams) {
    $rootScope.loading = true;
    PostFactory.get($routeParams.id).then(function (post) {
        $rootScope.loading = false;
        $scope.post = post;
    }, function (msg) {
        alert(msg);
    });
});