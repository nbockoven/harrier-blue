{literal}
  <script type="text/template" id="hit-template-module-contacts">
    <div class="hit media">
      <div class="media-body">
        <h4 class="media-heading">
          <a href="/market-research/contacts/{{{ id }}}">{{{ _highlightResult.first_name.value }}} {{{ _highlightResult.last_name.value }}}</a>
          <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="contacts">
            <i class="fa fa-plus-square-o text-danger"></i>
          </a>
        </h4>
        {{#role_list}}<small>{{{ role_list }}}</small>{{/role_list}}
        <ul class="list-inline text-muted small mb-0">
          {{#division}}<li><strong>Division:</strong> {{{ _highlightResult.division.value }}}</li>{{/division}}
          {{#city}}<li><strong>City:</strong> {{{ _highlightResult.city.value }}}</li>{{/city}}
          {{#state_code}}<li><strong>State:</strong> <a href="/market-research/contacts/{{state_id}}">{{{ _highlightResult.state_code.value }}}</a></li>{{/state_code}}
        </ul>
        <ul class="list-inline text-muted small mb-0">
          {{#level}}<li><strong>Level:</strong> {{{ _highlightResult.org_type.value }}}</li>{{/level}}
          {{#function_type}}<li><strong>Function:</strong> {{{ _highlightResult.function_type.value }}}</li>{{/function_type}}
        </ul>
      </div>
    </div>
  </script>

  <script type="text/template" id="hit-template-table-contacts">
    <tr>
      <td><a href="/market-research/contacts/{{{ id }}}">{{{ _highlightResult.first_name.value }}} {{{ _highlightResult.last_name.value }}}</a></td>
      <td>{{{ role_list }}}</td>
      <td>{{#division}}{{{ _highlightResult.division.value }}}{{/division}}{{^division}}-{{/division}}</td>
      <td>{{{ _highlightResult.city.value }}}</td>
      <td>{{#state_code}}<a href="/market-research/contacts/{{state_id}}">{{{ _highlightResult.state_code.value }}}</a>{{/state_code}}{{^state_code}}-{{/state_code}}</td>
      <td>{{#function_type}}{{{ _highlightResult.function_type.value }}}{{/function_type}}{{^function_type}}-{{/function_type}}</td>
      <td>{{#org_type}}{{{ _highlightResult.org_type.value }}}{{/org_type}}{{^org_type}}-{{/org_type}}</td>
      <td class="text-center">
        <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="contacts">
          <i class="fa fa-plus-square-o text-danger"></i>
        </a>
      </td>
    </tr>
  </script>
{/literal}
