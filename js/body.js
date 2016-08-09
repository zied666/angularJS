(function () {
    var app = angular.module('gemStore', []);

    app.directive('accueil', ['$http', function ($http) {
        return {
            district: 'E',
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

})();