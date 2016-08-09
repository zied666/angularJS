var app = angular.module('MonApp', ['ngRoute']);


app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/hotels.html', controller: 'HotelsController'})
        .when('/hotel/:id', {templateUrl: 'page/hotel.html', controller: 'HotelController'})
        .otherwise({redirectTo: '/'});
});


app.factory('HotelsFactory', function () {
    var factory = {
        hotels: [
            {
                "id": 1,
                "libelle": "Club Med",
                "stars": 5,
                "city": "Hammamet "
            },
            {
                "id": 2,
                "libelle": "Africa",
                "stars": 2,
                "city": "marsa "
            },
            {
                "id": 3,
                "libelle": "Le prince",
                "stars": 3,
                "city": "Hammamet "
            },
            {
                "id": 4,
                "libelle": "Movenmic",
                "stars": 2,
                "city": "Sousse "
            },
            {
                "id": 5,
                "libelle": "Kiops",
                "stars": 4,
                "city": "Sousse "
            },
            {
                "id": 6,
                "libelle": "Hambra",
                "stars": 5,
                "city": "marsa "
            },
            {
                "id": 7,
                "libelle": "Magic life",
                "stars": 3,
                "city": "Hammamet "
            },
            {
                "id": 8,
                "libelle": "Manar",
                "stars": 4,
                "city": "Sousse "
            }
        ],
        getHotels: function () {
            return factory.hotels
        },
        setHotels: function (id) {
            return factory.hotels[0]
        }
    };
    return factory;
});

app.controller('HotelsController', ['$scope', '$http','HotelsFactory', function ($scope, $http,HotelsFactory) {
    $scope.hotels = HotelsFactory.getHotels();
    /*$http({
        method: 'GET',
        url: 'js/hotels.json'
    }).success(function (data) {
        $scope.hotels = data;
    });*/
}]);

app.controller('HotelController', function ($scope, $http, HotelsFactory) {

});

/*

 app.directive('accueil', ['$http', function ($http) {
 return {
 district: 'E',
 scope: true,
 templateUrl: 'page/accueil.html',
 controllerAs: "accueil",
 controller: function () {
 store = this;
 store.yourName = "Zied";
 store.hotels = [];
 $http({
 method: 'GET',
 url: 'js/hotels.json'
 }).success(function (data) {
 store.hotels = data;
 });
 }
 };
 }]);
 */
