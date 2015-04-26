'use strict';

angular.module('blog')
.controller('PostsCtrl', ['$scope', 'Post', '$window', '$state', function($scope, Post, $window, $state){
Post.init();
$scope.afPosts = Post.init();

$scope.post = function(post){
  var p = {
    title: post.title,
    postMain: post.postMain,
    createdAt: $window.Firebase.ServerValue.TIMESTAMP
  };

  Post.add(p)
  .then(function(data){
    console.log(data);
    $scope.post = {};
    $state.go('home');
  });
};
}]);
