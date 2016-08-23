app.controller('HotelsController', function ($scope,$rootScope,HotelFactory) {

    $rootScope.loading = true;
    $scope.hotels = {};
    HotelFactory.all().then(function (hotels) {
        $rootScope.loading = false;
        $scope.hotels = hotels;
    }, function (msg) {
        alert(msg);
    });

});