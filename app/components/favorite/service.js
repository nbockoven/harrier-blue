harrierblue.factory('favoriteService', ['$http', function( $http ){
  return {
    result: function( criteria, scope ){
      var $promise = $http.post('app/components/favorite/data.php', criteria); // send data to server
      $promise.then(function( msg ){
        scope.favorites = msg.data;
      });
    }
  }
}]);
