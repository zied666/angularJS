app.controller('LoginController', function ($scope, $rootScope, $cookieStore, UserFactory, $window, $timeout) {

    if (UserFactory.currentUser != false)
        $window.location.href = '#/profile';

    console.log(UserFactory.currentUser);
    $scope.success = false;
    $scope.error = false;

    $scope.login = function () {
        $scope.loadingForm = true;
        UserFactory.login($scope.email, $scope.password).then(function (response) {
            if (response != false) {
                $cookieStore.put('currentUser', response);
                UserFactory.currentUser = response;
                $scope.success = true;
                $scope.error = false;
                /*$timeout(function () {
                    $window.location.href = '#/';
                }, 5000);*/
            }
            else {
                $scope.success = false;
                $scope.error = true;
            }
            $scope.loadingForm = false;
        })
    };

});
app.controller('LoginNavController', function ($scope, $rootScope, $cookieStore, $window,UserFactory) {

    if ($cookieStore.get('currentUser') == undefined)
        $cookieStore.put('currentUser', false);
    UserFactory.currentUser = $cookieStore.get('currentUser');
    $scope.currentUser=UserFactory.currentUser;
    $scope.logout = function () {
        $cookieStore.put('currentUser', false);
        UserFactory.currentUser = false;
        $window.location.href = '#/';
    }

});

app.controller('ProfileController', function ($scope, $rootScope, $cookieStore, $window, $timeout,UserFactory) {

    if (UserFactory.currentUser == false)
        $window.location.href = '#/login';

    $scope.success = false;
    $scope.user = $cookieStore.get('currentUser');


    $scope.submit = function () {
        $scope.loadingForm = true;
        $timeout(function () {
            $cookieStore.put('currentUser', $scope.user);
            UserFactory.currentUser = $scope.user;
            $scope.loadingForm = false;
            $scope.success = true;
        }, 1000);
    }

});
