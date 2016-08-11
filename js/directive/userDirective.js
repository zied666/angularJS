app.directive("ngUserName", function () {

    return {
        scope: {
            id: '='
        },
        restrict: "E",
        templateUrl: 'page/directives/user_name_element.html',
        controller:function ($scope,UserFactory) {
            $scope.loading = true;
            $scope.user=UserFactory.get($scope.id);
            $scope.loading = false;
        }

    }

});