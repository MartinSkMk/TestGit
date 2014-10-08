var App = angular.module("App", ["ionic"]);

App.service("FreshlyPressed", ["$http", "$log", FreshlyPressed]);

App.controller("AppCtrl", ["$scope", "FreshlyPressed", "$log", AppCtrl]);

function AppCtrl($scope, FreshlyPressed, $log) {
    $scope.posts = [];
    $scope.refresh = function() {        
        FreshlyPressed.getBlogs($scope);
        console.log($scope);
        console.log("say this then");
        console.log("end");
    }

    console.log($scope.posts);

}

function FreshlyPressed($http, $log) {
    this.getBlogs = function($scope) {
        $http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
            .success(function(result) {
                $scope.posts = result.posts;  
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
}

