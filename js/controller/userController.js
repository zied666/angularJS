app.controller('UsersController', function ($scope,$rootScope, $http, UserFactory) {
    $rootScope.loading=false;
    $scope.loadingTable = true;
    $scope.users=[];
    UserFactory.all().then(function (data) {
        $scope.users=data;
        $scope.loadingTable = false;
    });
});

app.controller('UserController', function ($scope, $rootScope, $http, UserFactory, $routeParams) {

    $scope.tab={};
    $scope.tab.profile=true;
    $scope.tab.todos=false;
    $rootScope.loading = true;
    UserFactory.getPromise($routeParams.id).then(function (user) {
        $scope.user=user;
        $rootScope.loading = false;
    });

    $scope.loadingToDo=true;
    $scope.todos=[];
    UserFactory.getToDos($routeParams.id).then(function (data) {
        $scope.todos=data;
        $scope.loadingToDo=false;
    });

    $scope.activeProfile=function () {
        $scope.tab.profile=true;
        $scope.tab.todos=false;
    }

    $scope.activeToDos=function () {
        $scope.tab.profile=false;
        $scope.tab.todos=true;
    }


});