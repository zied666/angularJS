app.controller('LoginController', function ($scope, $rootScope, localStorageService, UserFactory, $window,$timeout, $route) {

    if ($rootScope.currentUser != false)
        $window.location.href = '#/profile';

    //console.log($rootScope.currentUser);
    $scope.success = false;
    $scope.error = false;

    $scope.login = function () {
        $scope.loadingForm = true;
        UserFactory.login($scope.email, $scope.password).then(function (response) {
            if (response != false) {
                //$cookieStore.put('currentUser', response);
                localStorageService.set("currentUser","ddddddddddd");
                //localStorageService.get()("currentUser");
                $rootScope.currentUser = response;
                $scope.success = true;
                $scope.error = false;
                $timeout(function () {
                    $route.reload()
                }, 2000);
            }
            else {
                $scope.success = false;
                $scope.error = true;
            }
            $scope.loadingForm = false;
        })
    };

});
app.controller('LoginNavController', function ($scope, $rootScope, localStorageService, $window, UserFactory) {

    if(!localStorageService.hasOwnProperty("currentUser"))
        localStorageService.set("currentUser",false);
    //if ($cookieStore.get('currentUser') == undefined)
    //    $cookieStore.put('currentUser', false);
    //$rootScope.currentUser = $cookieStore.get('currentUser');
    $rootScope.currentUser = localStorageService.get("currentUser");
    //$scope.currentUser = $rootScope.currentUser;
    $scope.logout = function () {
        //$cookieStore.put('currentUser', false);
        localStorageService.set("currentUser",false);
        $rootScope.currentUser = false;
        $window.location.href = '#/';
    }

});

app.controller('ProfileController', function ($scope, $rootScope, localStorageService, $window, $timeout, UserFactory) {

    console.log(localStorageService.get("currentUser"));


    if ($rootScope.currentUser == false)
        $window.location.href = '#/login';

    $scope.success = false;
    $scope.user = localStorageService.get("currentUser");


    $scope.submit = function () {
        $scope.loadingForm = true;
        $timeout(function () {
            localStorageService.set("currentUser",$scope.user);
            //$cookieStore.put('currentUser', $scope.user);
            $rootScope.currentUser = localStorageService.get("currentUser");
            $scope.loadingForm = false;
            $scope.success = true;
        }, 1000);
    }

});
