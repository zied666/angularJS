app.controller('HomePageController', function ($scope,$rootScope, PostFactory,UserFactory) {

    $scope.posts=[];
    $scope.users=[];

    $scope.loadingPosts = true;
    $scope.loadingUsers = true;

    UserFactory.limit(5).then(function (data) {
        $scope.users=data;
        console.log(data);
        $scope.loadingUsers = false;
    });

    PostFactory.all(0,5).then(function (data) {
        $scope.posts=data;
        $scope.loadingPosts = false;
    });

});