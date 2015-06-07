<div class="tab-pane {if $smarty.get.tab == 'market-alerts'}active{/if}" id="market-alerts" role="tabpanel">

  {include file="../parts/function_bar.tpl" name="market-alerts"}

  <div class="row">
    <!-- Facets -->
    <div class="col-sm-3 hidden-xs" name="filters">
      <div id="facets-market-alerts"></div>
      {include file="../parts/filters.tpl"}
    </div><!-- .col-sm-3 -->


    <div class="col-sm-9 col-xs-12">
      <!-- filters -->
      <div class="well well-sm" id="filters-market-alerts" style="display:none"></div>

      <div class="panel panel-default">
        <!-- Stats + sort order menu -->
        <div class="panel-heading pt-5 pb-5">
          {include file="../parts/section_heading.tpl" name="market-alerts" displayBtn="table" hideDownload=true}
        </div><!-- .panel-heading -->

        <!-- Hits -->
        <div class="panel-body" id="hits-module-market-alerts"></div>
        <div class="table-responsive">
          <table class="table table-condensed table-striped" id="hits-table-market-alerts" style="display:none">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>By</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div><!-- .table-responsive -->

        <!-- /Hits -->

        <div class="panel-footer pb-0">
          <!-- Pagination -->
          <div id="pagination-market-alerts"></div>
        </div>
      </div><!-- .panel -->
    </div><!-- .col-sm-9 -->
  </div><!-- .row -->
</div><!-- .tab-pane -->
