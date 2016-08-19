app.controller('LoginController', function ($scope, $rootScope,$cookieStore, UserFactory,$window,$timeout) {

    $scope.success = false;
    $scope.error = false;

    $scope.login = function () {
        $scope.loadingForm=true;
        UserFactory.login($scope.email, $scope.password).then(function (response) {
            if (response!=false)
            {
                $cookieStore.put('currentUser',response);
                $rootScope.currentUser=response;
                $scope.success = true;
                $scope.error = false;
                $timeout(function () {
                    $window.location.href = '#/';
                }, 5000);
            }
            else
            {
                $scope.success = false;
                $scope.error = true;
            }
            $scope.loadingForm=false;
        })
    };

});
app.controller('LoginNavController', function ($scope, $rootScope,$cookieStore,$window) {

    if($cookieStore.get('currentUser') == undefined)
        $cookieStore.put('currentUser',false);
    $rootScope.currentUser=$cookieStore.get('currentUser');

    $scope.logout = function () {
        $cookieStore.put('currentUser',false);
        $rootScope.currentUser=false;
        $window.location.href = '#/';
    }

});
