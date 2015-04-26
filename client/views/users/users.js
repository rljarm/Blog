'use strict';

angular.module('blog')
.controller('UsersCtrl', ['$scope', 'User', function($scope, User){


  $scope.submit = function(user){
      User.login(user)
      .catch(function(err){
        console.error(err);
      });
  };
}]);
