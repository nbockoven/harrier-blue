harrierblue.controller('contact', ['$scope', 'contactInfo', function( $scope, contactInfo ){
  console.log( contactInfo );
  console.log( 'hello' );
  console.log( this );
  $scope.contact = contactInfo;
}]);
