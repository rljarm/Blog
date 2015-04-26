'use strict';

angular.module('blog')
.factory('User', ['$rootScope', function($rootScope){

  function login(user){
    return $rootScope.afAuth.$authWithPassword(user);
  }
  function logout(){
    return $rootScope.afAuth.$unauth();
  }

  return {login: login, logout: logout};
}]);
