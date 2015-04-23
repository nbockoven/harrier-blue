harrierblue.factory('searchService', ['$http', '$q', function( $http, $q ){
  return {
    getBids: function( criteria ){
      var deferred = $q.defer();
      var $promise = $http.post('app/components/search/data.php', criteria); // send data to server
      $promise.then(function( output ){
        deferred.resolve( {results: output.data} );
      });
      return deferred.promise;
    }
  }
}]);
