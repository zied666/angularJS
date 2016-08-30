app.controller('HotelsController', function ($scope, $rootScope, HotelFactory) {

    $rootScope.loading = true;
    $scope.hotels = {};
    HotelFactory.all().then(function (hotels) {
        $scope.hotels = hotels;
        $rootScope.loading = false;
    }, function (msg) {
        alert(msg);
    });

});
app.controller('HotelController', function ($scope, $rootScope, HotelFactory, $routeParams) {
    $rootScope.loading = true;
    $scope.tab = 1;
    $scope.hotel = {};
    $scope.saisons = false;
    $scope.selectedSeason = false;
    HotelFactory.get($routeParams.id).then(function (hotels) {
        $scope.hotel = hotels;
        $rootScope.loading = false;
    }, function (msg) {
        alert(msg);
    });

    $scope.loadSaisons = function () {
        $scope.tab = 4;
        if ($scope.saisons == false) {
            $scope.loadingSaisons = true;
            HotelFactory.getSaisons($routeParams.id).then(function (data) {
                $scope.saisons = data;
                $scope.loadingSaisons = false;
            }, function (msg) {
                alert(msg);
            });
        }
    }
    $scope.changeSelectedSeason = function (id) {
        angular.forEach($scope.saisons, function (value, key) {
            if (value.id == id)
                $scope.selectedSeason = value;
        });
    }
    $scope.cancelSelectedSeason = function (id) {
        $scope.selectedSeason = false;
    }
});