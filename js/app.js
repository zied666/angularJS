var app = angular.module('MonApp', ['ngRoute', 'ngResource']);
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});
app.run(['$templateCache', function ($templateCache) {
    $templateCache.removeAll();
}]);
app.run(function ($rootScope) {
    $rootScope.currentUser=false;
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'page/homepage.html', controller: 'HomePageController'})
        .when('/login', {templateUrl: 'page/login.html', controller: 'LoginController'})
        .when('/posts', {templateUrl: 'page/posts.html', controller: 'PostsController'})
        .when('/post/:id', {templateUrl: 'page/post.html', controller: 'PostController'})
        .when('/user/:id', {templateUrl: 'page/user.html', controller: 'UserController'})
        .when('/users', {templateUrl: 'page/users.html', controller: 'UsersController'})
        .otherwise({redirectTo: '/'});
});