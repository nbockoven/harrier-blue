harrierblue.config(['$routeProvider', function( $routeProvider ){

  $routeProvider

  .when('/login', {
    title:       'Login',
    templateUrl: 'app/components/login/login-view.html',
    controller:  'login'
  })

  .when('/dashboard', {
    title:       'Dashboard',
    templateUrl: 'app/components/dashboard/dashboard-view.html',
    controller:  'dashboard'
  })

  .when('/search', {
    title:       'Search',
    templateUrl: 'app/components/search/search-view.html',
    controller:  'search'
  })

  .when('/', {
      title: 'Login',
      templateUrl: 'app/components/login/login-view.html',
      controller:  'login',
      role: '0'
  })

  .otherwise({
    redirectTo: '/login'
  });

}]);
