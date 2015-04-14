harrierblue.factory('loginService', ['$http', function( $http ){
  return {
    login: function( user, scope ){
      var $promise = $http.post('app/components/login/data.php', user); // send data to server
      $promise.then(function( msg ){
        if( msg.data == 'success' ) scope.msgtxt = 'Yaba Daba Dooo!';
        else scope.msgtxt = 'Oohhh, so close!';
      });
    }
  }
}]);
