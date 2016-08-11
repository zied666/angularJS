app.directive("ngPost", function () {

    return {
        scope: {
            post: '=',
        },
        restrict: "E",
        templateUrl: 'page/directives/post_element.html'
    }

});

app.directive("ngCommentLink", function () {

    return {
        scope: {
            id: '='
        },
        restrict: "E",
        templateUrl: 'page/directives/comment_link.html',
        controller:function ($scope,CommentFactory) {
            $scope.showComments = false;
            $scope.loading = true;
            CommentFactory.getByPostId($scope.id).then(function (comments) {
                $scope.loading = false;
                $scope.count = comments.length;
                $scope.comments = comments;
            });
        }
    }

});