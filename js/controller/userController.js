app.controller('UserController', function ($scope,$rootScope, $http, UserFactory, $routeParams) {
    $rootScope.loading = true;
    $rootScope.user=UserFactory.get($routeParams.id);
    $rootScope.loading = false;
});