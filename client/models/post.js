'use strict';

angular.module('blog')
.factory('Post', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){
  var fbPosts;
  var afPosts;


function init(){
 fbPosts = $rootScope.fbRoot.child('posts');
 afPosts = $firebaseArray(fbPosts);
 return afPosts;
}

function add(post){
    return afPosts.$add(post);
  }

  return {add: add, init: init};
}]);
