app.controller('UserController', function ($scope, $rootScope, $http, UserFactory, $routeParams) {
    $rootScope.loading = true;
    UserFactory.getPromise($routeParams.id).then(function (user) {
        $scope.user=user;
        $rootScope.loading = false;
    });
});


app.controller('UsersController', function ($scope,$rootScope, $http, UserFactory) {
    $rootScope.loading=false;
    $scope.loadingTable = true;
    $scope.users=[];
    UserFactory.all().then(function (data) {
        $scope.users=data;
        $scope.loadingTable = false;
    });
});