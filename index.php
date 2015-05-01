<!DOCTYPE html>
<html lang="en-us" data-ng-app="harrierblue" class="bg-gray">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title data-ng-bind="$state.current.data.pagetitle + ' | Harrier Blue'">Harrier Blue</title>
    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.4/paper/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css">
    <link rel="stylesheet" href="assets/css/core-layout.css">
    <link rel="stylesheet" href="assets/css/style.css">

  </head>
  <body class="bg-gray">

    <? include 'app/shared/header/view.html' ?>

    <div class="pt-15 container-fluid" data-ui-view>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <div class="panel panel-default">
            <div class="panel-body p-30">
              <h1 class="mt-0">loading...</h1>
              <div class="progress">
                <div class="progress-bar progress-bar-info progress-bar-striped active mb-0" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width:98%">
                  98% complete
                </div><!-- .progress-bar -->
              </div><!-- .progress -->
            </div><!-- .panel-body -->
          </div><!-- .panel -->
        </div><!-- .col-sm-6 -->
      </div><!-- .row -->
    </div><!-- .container-fluid (uiView) -->

    <? // include 'app/shared/footer/view.html' ?>

    <!-- COMMON MODAL -->
    <? include 'app/shared/modals/common.html' ?>

    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <!-- AngularJS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <!-- // <script src="https://code.angularjs.org/1.3.0-rc.5/angular-route.min.js"></script> -->
    <script src="http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js"></script>
    <script src="https://code.angularjs.org/1.0.6/angular-sanitize.js"></script>
    <!-- APP -->
    <script src="app/app.module.js"></script>

    <!-- CONTROLLERS -->
    <script src="app/components/contact/service.js"></script>
    <script src="app/components/contact/controller.js"></script>
    <script src="app/components/dashboard/controller.js"></script>
    <script src="app/components/favorite/service.js"></script>
    <script src="app/components/login/controller.js"></script>
    <script src="app/components/login/service.js"></script>
    <script src="app/components/saved-search/service.js"></script>
    <script src="app/components/search/controller.js"></script>
    <script src="app/components/search/service.js"></script>
    <script src="app/components/settings/controller.js"></script>
    <script src="app/components/welcome/controller.js"></script>


    <!-- ROUTER -->
    <script src="app/app.routes.js"></script>


    <!-- CUSTOM -->
    <script src="assets/js/magic.js"></script>
  </body>
</html>
