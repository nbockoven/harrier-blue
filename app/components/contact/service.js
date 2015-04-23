harrierblue.service('contactService', ['$http', function( $http ){
  this.getByID = function( id ){
    return $http.post('app/components/contact/data.php', id);
  }
  // return {
  //   getByID: function( id ){
  //     var $promise = $http.post('app/components/contact/data.php', id); // send data to server
  //     $promise.then(function( msg ){
  //       // console.log( msg.data );
  //     });
  //   }
  // }
}]);
