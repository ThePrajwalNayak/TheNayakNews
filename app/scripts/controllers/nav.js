'use strict'


angular.module('TheNayakNews').controller('navController', ['$scope', '$location','$state', '$rootScope', function ($scope, $location, $state, $rootScope)  {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };

    $scope.username;
    $scope.password;
    $scope.showLoginButton = false;

    $scope.validateUser = function(){
      if($scope.username === 'admin' && $scope.password === 'admin'){
        $scope.loginUsername = $scope.username;
        $rootScope.loggedIn = true;
        $scope.showLoginButton = true;
        $state.go('film');
      }else{
        alert('Please enter admin and admin');
      }

     $scope.logout = function(){
       $rootScope.loginUsername = '';
       $rootScope.loggedIn = false;
       $scope.username = '';
       $scope.password = '';
       $scope.showLoginButton = false;
       $state.go('home');
     } 

    }
}]);
