var app = angular.module('MonApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/hotels.html',controller:'HotelsController'})
        .when('/hotel', {templateUrl: 'page/hotel.html',controller:'HotelController'})
        .otherwise({redirectTo: '/'});
});

app.controller('HotelsController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'js/hotels.json'
    }).success(function (data) {
        $scope.hotels = data;
    });
}]);

app.controller('HotelController',  function ($scope, $http) {

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
