var app = angular.module('MonApp', ['ngRoute','ngResource']);


app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});
app.run(['$templateCache', function ( $templateCache ) {
    $templateCache.removeAll(); }]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/hotels.html', controller: 'HotelsController'})
        .when('/hotel/:id', {templateUrl: 'page/hotel.html', controller: 'HotelController'})
        .otherwise({redirectTo: '/'});
});