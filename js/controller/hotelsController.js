app.controller('HotelsController', function ($scope,$rootScope,HotelFactory) {

    $rootScope.loading = true;
    $scope.hotels = {};
    HotelFactory.all().then(function (hotels) {
        $scope.hotels = hotels;
        $rootScope.loading = false;
    }, function (msg) {
        alert(msg);
    });

});
app.controller('HotelController', function ($scope,$rootScope,HotelFactory,$routeParams) {
    $rootScope.loading = true;
    $scope.tab=1;
    $scope.hotel = {};
    HotelFactory.get($routeParams.id).then(function (hotels) {
        $scope.hotel = hotels;
        $rootScope.loading = false;
    }, function (msg) {
        alert(msg);
    });
});