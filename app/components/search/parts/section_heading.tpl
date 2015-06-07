<div class="form-inline">
  <div class="row">
    <div class="col-sm-6">
      <span name="stats-{$name}" class="form-group mt-5"></span>
    </div><!-- .col-sm-6 -->
    <div class="col-sm-6 text-right">
      <ul class="list-inline m-0">
        {if $viewPerPage}
          <li>
            <span class="form-group">
              <select class="form-control input-sm" onchange="resultsPerPage('{$name}', this)">
                {foreach $viewPerPage as $view}
                  <option value="{$view}">{$view} per page</option>
                {/foreach}
              </select>
            </span>
          </li>
        {/if}
        {if !$hideDownload}
          <li>
            <span class="form-group">
              <a href="#" name="download-{$name}" class="btn btn-default btn-sm" style="margin-top:-1px"><i class="fa fa-download"></i> Download</a>
            </span>
          </li>
        {/if}
        <li>
          <span class="form-group">
            {if $displayBtn == 'list'}
              <a href="javascript:void(0)" name="view_as-module-{$name}" class="btn btn-default btn-sm" style="font-size:19px;padding:0 3px" data-toggle="tooltip" data-placement="bottom" title="List view">
                <i class="fa fa-list fa-fw m-0"></i>
              </a>
            {else}
              <a href="javascript:void(0)" name="view_as-table-{$name}" class="btn btn-default btn-sm" style="font-size:19px;padding:0 3px" data-toggle="tooltip" data-placement="bottom" title="Table view">
                <i class="fa fa-table fa-fw m-0"></i>
              </a>
            {/if}
          </span>
        </li>
      </ul>
    </div><!-- .col-sm-6 -->
  </div><!-- .row -->
</div><!-- .form-inline -->
