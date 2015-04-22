harrierblue.controller('dashboard', ['$scope', '$log', function( $scope, $log ){
  $scope.heroes = ['Superman', 'Batman', 'Wonder Woman', 'The Flash', 'Green Lantern'];
}]);


harrierblue.controller('dashboard', ['$scope', 'favoriteService', 'savedSearchService', function( $scope, favoriteService, savedSearchService ){
  $scope.favorites     = favoriteService.result( {user_id: 4}, $scope ); // call saved search service
  $scope.savedSearches = savedSearchService.result( {user_id: 4}, $scope ); // call saved search service
}]);
