harrierblue.controller('search', ['$scope', 'bids', function( $scope, bids ){
  $scope.results = bids.results;
}]);
