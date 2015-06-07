{literal}
  <script type="text/template" id="hit-template-module-orgs">
    <div class="hit media">
      <div class="media-body">
        <h4 class="media-heading">
          <a href="/market-research/jurisdictions/{{{ id }}}">{{{ _highlightResult.title.value }}}</a>
          <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="orgs">
            <i class="fa fa-plus-square-o text-danger"></i>
          </a>
        </h4>
        <ul class="list-inline mb-0">
          {{#state_code}}<li class="small"><strong class="text-muted">State:</strong> <a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ state_code }}}</a></li>{{/state_code}}
          {{#org_type}}<li class="small"><strong class="text-muted">Government Level:</strong> {{{ org_type }}}</li>{{/org_type}}
          {{#function_type}}<li class="small"><strong class="text-muted">Function:</strong> {{{ function_type }}}</li>{{/function_type}}
        </ul>
        <ul class="list-inline mb-0">
          {{#total_budget}}<li class="small"><strong class="text-muted">Total Budget:</strong> ${{{ total_budget }}}</li>{{/total_budget}}
          {{#total_it_budget}}<li class="small"><strong class="text-muted">Est. IT Budget:</strong> ${{{ total_it_budget }}}</li>{{/total_it_budget}}
          {{#population}}<li class="small"><strong class="text-muted">Population/Enrollment:</strong> {{{ population }}}</li>{{/population}}
          {{#num_employees}}<li class="small"><strong class="text-muted">Employees:</strong> {{{ num_employees }}}</li>{{/num_employees}}
        </ul>
      </div>
    </div>
  </script>

  <script type="text/template" id="hit-template-table-orgs">
    <tr>
      <td><a href="/market-research/jurisdictions/{{{ id }}}">{{{ _highlightResult.title.value }}}</a></td>
      <td><a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ state_code }}}</a></td>
      <td class="small">{{{ org_type }}}</td>
      <td class="small">{{#function_type}}{{{ _highlightResult.function_type.value }}}{{/function_type}}{{^function_type}}-{{/function_type}}</td>
      <td class="small">{{#total_budget}}{{{ total_budget }}}{{/total_budget}}{{^total_budget}}-{{/total_budget}}</td>
      <td class="small">{{#total_it_budget}}{{{ total_it_budget }}}{{/total_it_budget}}{{^total_it_budget}}-{{/total_it_budget}}</td>
      <td class="small">{{#population}}{{{ population }}}{{/population}}{{^population}}-{{/population}}</td>
      <td class="small">{{#num_employees}}{{{ num_employees }}}{{/num_employees}}{{^num_employees}}-{{/num_employees}}</td>
      <td class="text-center">
        <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="orgs">
          <i class="fa fa-plus-square-o text-danger"></i>
        </a>
      </td>
    </tr>
  </script>
{/literal}
