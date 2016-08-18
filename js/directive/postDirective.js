app.directive("ngPost", function () {

    return {
        scope: {
            post: '='
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
        controller:function ($scope,$rootScope,CommentFactory) {
            $scope.showComments = false;
            $scope.comments=[];
            CommentFactory.getCountByPostId($scope.id).then(function (count) {
                $scope.count = count;
            });
            $scope.showAllComments=function () {
                $scope.loadingComments = true;
                if($scope.showComments==false)
                {
                    if($scope.comments.length==0)
                    {
                        CommentFactory.getByPostId($scope.id).then(function (data) {
                            $scope.comments = data;
                            $scope.showComments = true;
                            $scope.loadingComments = false;
                        });
                    }
                    else
                    {
                        $scope.showComments = true;
                        $scope.loadingComments = false;
                    }
                }
                else
                {
                    $scope.showComments = false;
                    $scope.loadingComments = false;
                }
            }
        }
    }

});