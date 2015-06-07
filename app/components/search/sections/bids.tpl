<div class="tab-pane {if !$smarty.get.tab || $smarty.get.tab == 'bids'}active{/if}" id="bids" role="tabpanel">

  <div class="row">
    <!-- Facets -->
    <div class="col-sm-3 hidden-xs" name="filters">
      <div id="facets-bids"></div>
      {include file="../parts/filters.tpl"}
    </div><!-- .col-sm-3 -->


    <div class="col-sm-9 col-xs-12">
      <!-- filters -->
      <div class="well well-sm" id="filters-bids" style="display:none"></div>

      <div class="panel panel-default">
        <!-- Stats + sort order menu -->
        <div class="panel-heading pt-5 pb-5">
          {include file="../parts/section_heading.tpl" name="bids" displayBtn="table"}
        </div><!-- .panel-heading -->

        <!-- Hits -->
        <div class="panel-body" id="hits-module-bids"></div>
        <div class="table-responsive">
          <table class="table table-condensed table-striped" id="hits-table-bids" style="display:none">
            <thead>
              <tr>
                <th>Type</th>
                <th>Title</th>
                <th>Jurisdiction</th>
                <th>State</th>
                <th>Agency/Dept.</th>
                <th>Level</th>
                <th>Published</th>
                <th>Due</th>
                <th>Fav.</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div><!-- .table-responsive -->

        <!-- /Hits -->

        <div class="panel-footer pb-0">
          <!-- Pagination -->
          <div id="pagination-bids"></div>
        </div>
      </div><!-- .panel -->
    </div><!-- .col-sm-9 -->
  </div><!-- .row -->
</div><!-- .tab-pane -->
