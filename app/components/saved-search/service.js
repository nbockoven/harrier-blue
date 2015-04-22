harrierblue.factory('savedSearchService', ['$http', function( $http ){
  return {
    result: function( criteria, scope ){
      var $promise = $http.post('app/components/saved-search/data.php', criteria); // send data to server
      $promise.then(function( msg ){
        scope.savedSearches = msg.data;
      });
    }
  }
}]);
