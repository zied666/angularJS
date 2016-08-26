var app = angular.module('MonApp', ['ngRoute', 'ngResource','ngCookies','ngAnimate','ngMessages','ngSanitize']);
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});
app.run(['$templateCache', function ($templateCache) {
    $templateCache.removeAll();
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

/*app.run(function ($rootScope) {
    $rootScope.currentUser=false;
});*/
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/homepage.html', controller: 'HomePageController'})
        .when('/profile', {templateUrl: 'page/profile.html', controller: 'ProfileController'})
        .when('/login', {templateUrl: 'page/login.html', controller: 'LoginController'})
        .when('/posts', {templateUrl: 'page/posts.html', controller: 'PostsController'})
        .when('/post/:id', {templateUrl: 'page/post.html', controller: 'PostController'})
        .when('/user/:id', {templateUrl: 'page/user.html', controller: 'UserController'})
        .when('/users', {templateUrl: 'page/users.html', controller: 'UsersController'})
        .when('/hotels', {templateUrl: 'page/hotels.html', controller: 'HotelsController'})
        .when('/hotel/:id', {templateUrl: 'page/hotel.html', controller: 'HotelController'})
        .otherwise({redirectTo: '/'});
});