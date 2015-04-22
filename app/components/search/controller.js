harrierblue.controller('search', ['$scope', 'searchService', function( $scope, searchService ){
  $scope.results = searchService.result( {}, $scope ); // call search service
}]);
