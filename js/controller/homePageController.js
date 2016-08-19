app.controller('HomePageController', function ($scope,$rootScope, PostFactory,UserFactory) {

    $scope.posts=[];
    $scope.users=[];

    $scope.loadingPosts = true;
    $scope.loadingUsers = true;

    UserFactory.limit(5).then(function (data) {
        $scope.users=data;
        $scope.loadingUsers = false;
    });

    PostFactory.limit(0,2).then(function (data) {
        $scope.posts=data;
        $scope.loadingPosts = false;
    });

});