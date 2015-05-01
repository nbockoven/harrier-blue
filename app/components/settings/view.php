<div class="row">
  <div class="col-sm-12 col-md-10 col-md-offset-1">
    <div class="panel">
      <div class="panel-body p-30">
        <h1 class="mt-0"><i class="fa fa-cogs fa-fw"></i> settings</h1>

        <ul class="nav nav-tabs nav-justified">
          <li class="active"><a data-toggle="tab" data-target="#tab-user-profile">user profile</a></li>
          <li><a data-toggle="tab" data-target="#tab-content-preferences">content preferences</a></li>
          <li><a data-toggle="tab" data-target="#tab-partnering-profile">partnering profile</a></li>
          <li><a data-toggle="tab" data-target="#tab-account-management">account management</a></li>
          <li><a data-toggle="tab" data-target="#tab-usage-reports">usage reports</a></li>
        </ul><!-- .nav-tabs -->

        <div class="tab-content pt-20">

          <!-- user profile -->
          <div class="tab-pane active" id="tab-user-profile">
            <? include './tabs/user-profile.html' ?>
          </div><!-- .tab-pane -->

          <!-- content preferences -->
          <div class="tab-pane" id="tab-content-preferences">
            <? include './tabs/content-preferences.html' ?>
          </div><!-- .tab-pane -->

          <!-- partnering profile -->
          <div class="tab-pane" id="tab-partnering-profile">
            <? include './tabs/partnering-profile.html' ?>
          </div><!-- .tab-pane -->

          <!-- account management -->
          <div class="tab-pane" id="tab-account-management">
            <? include './tabs/account-management.html' ?>
          </div><!-- .tab-pane -->

          <!-- usage reports -->
          <div class="tab-pane" id="tab-usage-reports">
            <? include './tabs/usage-reports.html' ?>
          </div><!-- .tab-pane -->

        </div><!-- .tab-content -->

      </div><!-- .panel-body -->
    </div><!-- .panel -->
  </div><!-- .col-sm-12 -->
</div><!-- .row -->
