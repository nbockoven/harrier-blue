harrierblue.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider

  .state('404', {
    url: "/404",
    templateUrl: "app/components/404/view.html",
    data: {
      pagetitle: 'Page Note Found'
    }
  })

  .state('contact', {
    url: "/contact",
    // controller: 'contact',
    templateUrl: "app/components/contact/view.html",
    data: {
      pagetitle: 'Contacts',
      // requireLogin: true
    }
  })

  .state('contact.detail', {
    url: "/:contactID",
    data: {
      pagetitle: 'Contact'
    },
    resolve: {
      contactInfo: ['$stateParams', 'contactService', function( $stateParams, contactService ){
        return contactService.getByID( $stateParams.contactID ).$promise;
      }]
    },
    templateUrl: "app/components/contact/view.html",
    controller: 'contact'
  })

  .state('dashboard', {
    url: "/dashboard",
    controller: 'dashboard',
    templateUrl: "app/components/dashboard/view.html",
    data: {
      pagetitle: 'Dashboard',
      // requireLogin: true
    }
  })

  .state('login', {
    url: "/login",
    controller: 'login',
    templateUrl: "app/components/login/view.html",
    data: {
      pagetitle: 'Login'
    }
  })

  .state('logout', {
    url: "/logout",
    controller: 'logout',
    templateUrl: "app/components/logout/view.html",
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
    controller: 'search',
    templateUrl: "app/components/search/view.html",
    data: {
      pagetitle: 'Search',
      // requireLogin: true
    }
  })

  .state('settings', {
    url: "/settings",
    templateUrl: "app/components/settings/view.html",
    data: {
      pagetitle: 'Settings',
      requireLogin: true
    }
  })

  .state('support', {
    url: "/support",
    templateUrl: "app/components/support/view.php",
    data: {
      pagetitle: 'Support',
      // requireLogin: true
    }
  })

  .state('welcome', {
    url: "/",
    controller: "welcome",
    templateUrl: "app/components/welcome/view.html",
    data: {
      pagetitle: 'Welcome'
    }
  })

  ;
});
