'use strict';

angular.module('blog')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){

  $scope.afAuth.$onAuth(function(data) {
    if(data){
      $rootScope.activeUser = data;
    }else{
      $rootScope.activeUser = null;
    }

    $state.go('home');
  });

  $scope.refresh = function(){
  $rootScope.viewToggle = false;
  $scope.logout = function(){
    User.logout();
  };
  };
}]);
