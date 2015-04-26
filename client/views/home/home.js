'use strict';
angular.module('blog')
.controller('HomeCtrl', ['$scope', 'Post', function($scope, Post){

  // afPosts.$loaded();
  $scope.posts = Post.init();
  $scope.postShown = {};
  $scope.viewToggle = false;
  $scope.toggleBack = function(){
    $scope.viewToggle = false;
    location.reload();
  };

  $scope.showPost = function(post){
    $scope.postShown = post;
    $scope.viewToggle = true;
  };
  $scope.destroy = function(post){
    Post.kill(post);
    console.log(post);
  };
}]);
