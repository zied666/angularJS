app.directive("ngUserName", function () {

    return {
        scope: {
            iduser: '='
        },
        restrict: "E",
        templateUrl: 'page/directives/user_name_element.html',
        controller: function ($scope, $rootScope, UserFactory) {
            $scope.loading = true;
            $scope.user = UserFactory.get($scope.iduser);
            $scope.loading = false;
        }
    }

});