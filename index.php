<!DOCTYPE html>
<html lang="en-us" data-ng-app="harrierblue">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title data-ng-bind="$state.current.data.pagetitle + ' | Harrier Blue'">Harrier Blue</title>
    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.2/paper/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css">
    <link rel="stylesheet" href="assets/css/core-layout.css">
    <link rel="stylesheet" href="assets/css/style.css">

  </head>
  <body>

    <? include 'app/shared/header/navigation-view.html' ?>

    <div class="mt-15 container-fluid" data-ui-view><i class="fa fa-spinner fa-spin h1"></i></div>

    <? include 'app/shared/footer/footer-view.html' ?>

    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <!-- AngularJS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <!-- // <script src="https://code.angularjs.org/1.3.0-rc.5/angular-route.min.js"></script> -->
    <script src="http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js"></script>
    <!-- APP -->
    <script src="app/app.module.js"></script>
    <!-- CONTROLLERS -->
    <script src="app/components/dashboard/dashboard-controller.js"></script>
    <script src="app/components/login/login-controller.js"></script>
    <script src="app/components/search/search-controller.js"></script>
    <script src="app/components/splash/splash-controller.js"></script>
    <!-- ROUTER -->
    <script src="app/app.routes.js"></script>

    <!-- CUSTOM -->
    <script src="assets/js/magic.js"></script>
  </body>
</html>
