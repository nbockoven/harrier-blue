harrierblue.factory('searchService', ['$http', function( $http ){
  return {
    result: function( criteria, scope ){
      var $promise = $http.post('app/components/search/data.php', criteria); // send data to server
      $promise.then(function( msg ){
        scope.results = msg.data;
      });
    }
  }
}]);
