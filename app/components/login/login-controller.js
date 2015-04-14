harrierblue.controller('login', ['$scope', 'loginService', function( $scope, loginService ){
  $scope.msgtxt = '';
  $scope.login = function( user ){
    loginService.login( user, $scope ); // call login service
  }
}]);
