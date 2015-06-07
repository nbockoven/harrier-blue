<div class="tab-pane {if $smarty.get.tab == 'contacts'}active{/if}" id="contacts" role="tabpanel">

  {include file="../parts/function_bar.tpl" name="contacts" displayBtn="list"}

  <div class="row">
    <!-- Facets -->
    <div class="col-sm-3 hidden-xs" name="filters">
      <div id="facets-contacts"></div>
      {include file="../parts/filters.tpl"}
    </div><!-- .col-sm-3 -->

    <div class="col-sm-9 col-xs-12">
      <!-- filters -->
      <div class="well well-sm" id="filters-contacts" style="display:none"></div>

      <div class="panel panel-default">
        <!-- Stats + sort order menu -->
        <div class="panel-heading pt-5 pb-5">
          {include file="../parts/section_heading.tpl" name="contacts" displayBtn="list"}
        </div><!-- .panel-heading -->

        <!-- Hits -->
        <div class="panel-body" id="hits-module-contacts" style="display:none"></div>
        <div class="table-responsive">
          <table class="table table-condensed table-striped" id="hits-table-contacts">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Division</th>
                <th>City</th>
                <th>State</th>
                <th>Function</th>
                <th>Level</th>
                <th class="text-center">Fav.</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div><!-- .table-responsive -->

        <!-- /Hits -->

        <div class="panel-footer pb-0">
          <!-- Pagination -->
          <div id="pagination-contacts"></div>
        </div>
      </div><!-- .panel -->

    </div><!-- .col-sm-7 -->

    <!-- <div class="col-sm-2 col-xs-12">
      {* include file="./news.tpl" *}
    </div> -->
  </div><!-- .row -->
</div><!-- .tab-pane -->
