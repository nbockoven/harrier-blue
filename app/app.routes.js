harrierblue.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/404");
  //
  // Now set up the states
  $stateProvider

  .state('404', {
    url: "/404",
    templateUrl: "app/components/404/404-view.html",
    data: {
      pagetitle: 'Page Note Found'
    }
  })

  .state('contact', {
    url: "/contacts",
    controller: 'contact',
    templateUrl: "app/components/contact/contact-listing-view.html",
    data: {
      pagetitle: 'Contacts',
      requireLogin: true
    }
  })

  .state('contact-detail', {
    url: "/contact/:contactID",
    templateUrl: "app/components/contact/contact-detail-view.html",
    data: {
      pagetitle: 'Contact'
    },
    controller: function( $scope, $stateParams ){
      // get the id
      $scope.id = $stateParams.contactID;
    }
  })

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

  .state('modal', {
    abstract: true,
    views: {
      'modal': {
        templateUrl: 'app/shared/modals/common.html'
      }
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

  .state('welcome', {
    url: "/welcome",
    controller: "welcome",
    templateUrl: "app/components/welcome/welcome-view.html",
    data: {
      pagetitle: 'Welcome'
    }
  })

  ;
});
