harrierblue.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider

  .state('dashboard', {
    url: "/dashboard",
    controller: 'dashboard',
    templateUrl: "app/components/dashboard/dashboard-view.html",
    data: {
      pagetitle: 'Dashboard',
      requireLogin: true
    }
  })

  .state('login', {
    url: "/login",
    controller: 'login',
    templateUrl: "app/components/login/login-view.html",
    data: {
      pagetitle: 'Login'
    }
  })

  .state('logout', {
    url: "/logout",
    controller: 'logout',
    templateUrl: "app/components/logout/logout-view.html",
    data: {
      pagetitle: 'Logout',
      requireLogin: true
    }
  })

  .state('search', {
    url: "/search",
    templateUrl: "app/components/search/search-view.html",
    data: {
      pagetitle: 'Search',
      requireLogin: true
    }
  })

  .state('settings', {
    url: "/settings",
    templateUrl: "app/components/settings/settings-view.html",
    data: {
      pagetitle: 'Settings',
      requireLogin: true
    }
  })

  .state('', {
    url: "/",
    controller: "splash",
    templateUrl: "app/components/splash/splash-view.html",
    data: {
      pagetitle: 'Welcome'
    }
  })

  ;
});
