app.controller('LoginController', function ($scope, $rootScope, $cookieStore, UserFactory, $window,$timeout, $route) {

    if ($rootScope.currentUser != false)
        $window.location.href = '#/profile';

    console.log($rootScope.currentUser);
    $scope.success = false;
    $scope.error = false;

    $scope.login = function () {
        $scope.loadingForm = true;
        UserFactory.login($scope.email, $scope.password).then(function (response) {
            if (response != false) {
                $cookieStore.put('currentUser', response);
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
app.controller('LoginNavController', function ($scope, $rootScope, $cookieStore, $window, UserFactory) {

    if ($cookieStore.get('currentUser') == undefined)
        $cookieStore.put('currentUser', false);
    $rootScope.currentUser = $cookieStore.get('currentUser');
    //$scope.currentUser = $rootScope.currentUser;
    $scope.logout = function () {
        $cookieStore.put('currentUser', false);
        $rootScope.currentUser = false;
        $window.location.href = '#/';
    }

});

app.controller('ProfileController', function ($scope, $rootScope, $cookieStore, $window, $timeout, UserFactory) {

    if ($rootScope.currentUser == false)
        $window.location.href = '#/login';

    $scope.success = false;
    $scope.user = $cookieStore.get('currentUser');


    $scope.submit = function () {
        $scope.loadingForm = true;
        $timeout(function () {
            $cookieStore.put('currentUser', $scope.user);
            $rootScope.currentUser = $cookieStore.get('currentUser');
            $scope.loadingForm = false;
            $scope.success = true;
        }, 1000);
    }

});
