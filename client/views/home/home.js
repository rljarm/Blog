'use strict';
angular.module('blog')
.controller('HomeCtrl', ['$scope', 'Post', function($scope, Post){

  // afPosts.$loaded();
  $scope.posts = Post.init();

  $scope.viewToggle = false;
  $scope.toggleView = function(){
    $scope.viewToggle = true;
  };

  $scope.toggleBack = function(){
    $scope.viewToggle = false;
  };
}]);
