{literal}
  <script type="text/template" id="hit-template-module-bids">
    <div class="hit media">
      <div class="media-body">
        <h4 class="media-heading">
          <a href="/opportunities/rfp/{{ id }}">{{{ _highlightResult.title.value }}} <small>{{{ type }}}</small></a>
          <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="{{{ fav_type }}}" data-toggle="tooltip" data-placement="bottom" title="Add/Remove bookmark">
            <i class="fa fa-plus-square-o text-danger"></i>
          </a>
        </h4>
        <ul class="list-inline text-muted mb-5">
          {{#pub_date}}<li><strong>Published:</strong> {{{ pub_date }}}</li>{{/pub_date}}
          {{#due_date}}<li><strong>Due:</strong> {{{ due_date }}}</li>{{/due_date}}
          <li><strong>Jurisdiction:</strong> <a href="/market-research/jurisdictions/{{{ jurisdiction_id }}}">{{{ _highlightResult.jurisdiction_title.value }}}</a></li>
          {{#state_code}}<li><strong>State:</strong> <a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ state_code }}}</a></li>{{/state_code}}
          {{#using_agency_title}}<li><strong>Using Agency/Dept.:</strong> <a href="/market-research/jurisdictions/{{{ using_agency_id }}}">{{{ using_agency_title }}}</a></li>{{/using_agency_title}}
        </ul>
        <p>{{{ _snippetResult.description.value }}}<a href="/opportunities/rfp/{{ id }}"><strong>...</strong></a></p>
      </div>
    </div>
  </script>

  <script type="text/template" id="hit-template-table-bids">
    <tr>
      <td class="small">{{{ _highlightResult.type.value }}}</td>
      <td><a href="/opportunities/rfp/{{{ id }}}">{{{ _highlightResult.title.value }}}</a></td>
      <td><a href="/market-research/jurisdictions/{{{ jurisdiction_id }}}">{{{ _highlightResult.jurisdiction_title.value }}}</a></td>
      <td><a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ _highlightResult.state_code.value }}}</a></td>
      <td>{{#using_agency_title}}<a href="/market-research/jurisdictions/{{{ using_agency_id }}}">{{{ using_agency_title }}}</a>{{/using_agency_title}}{{^using_agency_title}}-{{/using_agency_title}}</td>
      <td class="small">{{{ _highlightResult.jurisdiction_type.value }}}</td>
      <td class="small">{{{ pub_date }}}</td>
      <td class="small">{{{ due_date }}}</td>
      <td class="text-center">
        <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="{{{ fav_type }}}">
          <i class="fa fa-plus-square-o text-danger"></i>
        </a>
      </td>
    </tr>
  </script>
{/literal}
