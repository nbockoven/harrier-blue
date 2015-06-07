<div class="tab-pane {if $smarty.get.tab == 'contracts'}active{/if}" id="contracts" role="tabpanel">

  <div class="row">
    <!-- Facets -->
    <div class="col-sm-3 hidden-xs" name="filters">
      <div id="facets-contracts"></div>
      {include file="../parts/filters.tpl"}
    </div><!-- .col-sm-3 -->


    <div class="col-sm-9 col-xs-12">
      <!-- filters -->
      <div class="well well-sm" id="filters-contracts" style="display:none"></div>

      <div class="panel panel-default">
        <!-- Stats + sort order menu -->
        <div class="panel-heading pt-5 pb-5">
          {include file="../parts/section_heading.tpl" name="contracts" displayBtn="table"}
        </div><!-- .panel-heading -->

        <!-- Hits -->
        <div class="panel-body" id="hits-module-contracts"></div>
        <div class="table-responsive">
          <table class="table table-condensed table-striped" id="hits-table-contracts" style="display:none">
            <thead>
              <tr>
                <th>Title</th>
                <th>Vendor</th>
                <th>State</th>
                <th>Expiration</th>
                <th class="text-center">Renewals</th>
                <th class="text-center">Fav.</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div><!-- .table-responsive -->

        <!-- /Hits -->

        <div class="panel-footer pb-0">
          <!-- Pagination -->
          <div id="pagination-contracts"></div>
        </div>
      </div><!-- .panel -->
    </div><!-- .col-sm-9 -->
  </div><!-- .row -->
</div><!-- .tab-pane -->
