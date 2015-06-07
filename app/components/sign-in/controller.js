harrierblue.controller('signIn', ['$scope', 'signInService', function( $scope, signInService ){
  $scope.alert = {};
  $scope.signIn = function( user ){
    signInService.signIn( user, $scope ); // call signIn service
  }
}]);
