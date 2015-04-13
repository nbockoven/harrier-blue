var harrierblue = angular.module('harrierblue', ['ui.router']);

harrierblue.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams){

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();
      $state.go("login")
      // get me a login modal!
    }
  });

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);
