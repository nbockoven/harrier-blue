phonecatApp.config(['$routeProvider', function( $routeProvider ){

  $routeProvider

    .when('/dashboard', {
      templateUrl: 'components/dashboard-view.html',
      controller: 'dashboard'
    })

    .when('/search', {
      templateUrl: 'components/search-listing-view.html',
      controller: 'search-listing'
    })

    .when('/search/:Id', {
      templateUrl: 'components/search-detail-view.html',
      controller: 'search-detail'
    })

    .otherwise({
      redirectTo: '/dashboard'
    });

}]);
