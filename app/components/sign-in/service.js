harrierblue.factory('signInService', ['$http', function( $http ){
  return {
    signIn: function( user, scope ){
      var $promise = $http.post('app/components/sign-in/data.php', user); // send data to server
      $promise.then(function( msg ){
        if( msg.data == 'success' ){
          scope.alert.msg = 'Yaba Daba Dooo!';
          scope.alert.classes = "alert-success fade in";
        }
        else{
          scope.alert.msg = 'Oohhh, so close!';
          scope.alert.classes = "alert-danger fade in";
        }
      });
    }
  }
}]);
