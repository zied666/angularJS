app.directive("ngHotel", function () {

    return {
        scope: {
            hotel: '=',
            showurl: '@',
        },
        restrict: "E",
        templateUrl: 'page/directives/hotel.html'
    }

});