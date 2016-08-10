app.controller('HotelsController', function ($scope,$rootScope, $http, HotelFactory) {
    $rootScope.loading = true;
    $scope.newHotel = {};
    HotelFactory.all().then(function (hotels) {
        $rootScope.loading = false;
        $scope.hotels = hotels;
    }, function (msg) {
        alert(msg);
    });
    $scope.addComment=function () {
        $scope.hotels.push($scope.newHotel);
        $scope.newHotel = {};
        HotelFactory.add($scope.newHotel).then(
            function () {
                
            },
            function () {
                alert("Votre hotel n'a pas pu etre sauvgarder");
            }
        );
    }
});

app.controller('HotelController', function ($scope,$rootScope, $http, HotelFactory, $routeParams) {
    $rootScope.loading = true;
    HotelFactory.get($routeParams.id).then(function (hotel) {
        $rootScope.loading = false;
        $scope.hotel = hotel;
    }, function (msg) {
        alert(msg);
    });
});