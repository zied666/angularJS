app.controller('HotelsController', function ($scope, HotelFactory) {

    limit = 10;
    offset = 10;
    $scope.search = {
        checkIn: new Date(),
        nuitees: "1",
        name: "",
        order: "ASC",
        orderBy: "libelle",
        ville: null,
        etoiles: null
    };
    $scope.updateHotels = true;
    $scope.moreHotelsLoading = false;

    $scope.hotels = [];
    HotelFactory.filtre(limit, 0, $scope.search).then(function (hotels) {
        $scope.hotels = hotels;
        $scope.updateHotels = false;
    }, function (msg) {
        alert(msg);
    });


    $scope.update = function () {
        $scope.updateHotels = true;
        HotelFactory.filtre(limit, 0, $scope.search).then(function (hotels) {
            $scope.hotels = hotels;
            $scope.updateHotels = false;
            offset = 10;
        }, function (msg) {
            alert(msg);
        });
    };

    $scope.updateSort = function (lib) {
        if (lib == $scope.search.orderBy) {
            if ($scope.search.order == "DESC")
                $scope.search.order = "ASC";
            else
                $scope.search.order = "DESC";
        }
        else
            $scope.search.orderBy = lib;
    };

    $scope.loadMorePost = function () {
        $scope.moreHotelsLoading = true;
        HotelFactory.filtre(limit, offset, $scope.search).then(function (hotels) {
            if (hotels.length > 0) {
                $scope.hotels = $scope.hotels.concat(hotels);
                offset += limit;
            }
            $scope.moreHotelsLoading = false;
        }, function (msg) {
            alert(msg);
        });
    }

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