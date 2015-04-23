harrierblue.controller('contact', ['$scope', 'contactInfo', function( $scope, contactInfo ){
  $scope.contact = contactInfo.contact[0];
}]);
