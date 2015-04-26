'use strict';

angular.module('blog', ['firebase', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/home', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('post', {url: '/post', templateUrl: '/views/posts/posts.html', controller: 'PostsCtrl'});
}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', '$state', function($rootScope, $window, $firebaseAuth, firebaseUrl, $state){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
  $state.go('home');
}]);
