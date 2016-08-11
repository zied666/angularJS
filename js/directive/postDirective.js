app.directive("ngPost", function () {

    return {
        scope: {
            post: '=',
            showurl: '@',
        },
        restrict: "E",
        templateUrl: 'page/directives/post_element.html'
    }

});