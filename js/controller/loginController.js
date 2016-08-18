app.controller('LoginController', function ($scope, $rootScope, UserFactory,$window,$timeout) {

    $scope.success = false;
    $scope.error = false;



    $scope.login = function () {
        $scope.loadingForm=true;
        UserFactory.login($scope.email, $scope.password).then(function (response) {
            if (response!=false)
            {
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
    }

    $scope.logout = function () {
        $rootScope.currentUser=false;
        $scope.success = false;
        $scope.error = false;
    }

});