app.controller('UserController', function ($scope, $rootScope, $http, UserFactory, $routeParams) {
    $rootScope.loading = true;
    UserFactory.getPromise($routeParams.id).then(function (user) {
        $scope.user=user;
        $rootScope.loading = false;
    });
});


app.controller('UsersController', function ($scope, $rootScope, $http, UserFactory) {
    $rootScope.loading = true;
    $scope.users=[];
    UserFactory.all().then(function (data) {
        $scope.users=data;
        console.log($scope.users);
        $rootScope.loading = false;
    });
});