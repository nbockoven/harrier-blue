<div class="tab-pane {if $smarty.get.tab == 'orgs'}active{/if}" id="orgs" role="tabpanel">

  {include file="../parts/function_bar.tpl" name="orgs" displayBtn="list"}

  <div class="row">
    <!-- Facets -->
    <div class="col-sm-3 hidden-xs" name="filters">
      <div id="facets-orgs"></div>
      {include file="../parts/filters.tpl"}
    </div><!-- .col-sm-3 -->

    <div class="col-sm-9 col-xs-12">
      <!-- filters -->
      <div class="well well-sm" id="filters-orgs" style="display:none"></div>

      <div class="panel panel-default">
        <!-- Stats + sort order menu -->
        <div class="panel-heading pt-5 pb-5">
          {include file="../parts/section_heading.tpl" name="orgs" displayBtn="list"}
        </div><!-- .panel-heading -->

        <!-- Hits -->
        <div class="panel-body" id="hits-module-orgs" style="display:none"></div>
        <div class="table-responsive">
          <table class="table table-condensed table-striped" id="hits-table-orgs">
            <thead>
              <tr>
                <th>Name</th>
                <th>State</th>
                <th>Level</th>
                <th>Function</th>
                <th>Total Budget</th>
                <th>Est. IT Budget</th>
                <th>Population/Enrollment</th>
                <th>Employees</th>
                <th class="text-center">Fav.</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div><!-- .table-responsive -->

        <!-- /Hits -->

        <div class="panel-footer pb-0">
          <!-- Pagination -->
          <div id="pagination-orgs"></div>
        </div>
      </div><!-- .panel -->

      {* include file="./jurisdiction_documents.tpl" *}

    </div><!-- .col-sm-9 -->
  </div><!-- .row -->
</div><!-- .tab-pane -->
