harrierblue.service('contactService', ['$http', '$q', function( $http, $q ){
  return {
    getByID: function( id ){
      var deferred = $q.defer();
      var $promise = $http.post('app/components/contact/data.php', id); // send data to server
      $promise.then(function( output ){
        deferred.resolve( { contact: output.data } );
      });
      return deferred.promise;
    }
  }
}]);
