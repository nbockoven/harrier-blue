harrierblue.controller('dashboard', ['$scope', 'favoriteService', 'savedSearchService', function( $scope, favoriteService, savedSearchService ){
  $scope.favorites     = favoriteService.result( {user_id: 4}, $scope ); // call saved search service
  $scope.savedSearches = savedSearchService.result( {user_id: 4}, $scope ); // call saved search service
}]);
