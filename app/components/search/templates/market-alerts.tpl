{literal}
  <script type="text/template" id="hit-template-module-market-alerts">
    <div class="hit media">
      <div class="media-body">
        <h4 class="media-heading">
          <a href="/marketsmart/market-alerts/{{ objectID }}">{{{ _highlightResult.title.value }}}</a>
          <small class="text-muted">- {{{ author }}}</small>
        </h4>
        <ul class="list-inline text-muted mb-5">
          {{#pub_date}}<li><strong>Published:</strong> {{{ pub_date }}}</li>{{/pub_date}}
          {{#state_code}}<li><strong>State:</strong> <a href="/market-research/jurisdictions/{{ state_id }}">{{{ state_code }}}</a></li>{{/state_code}}
        </ul>
        <p>{{{ _snippetResult.body.value }}}<a href="/marketsmart/market-alerts/{{ objectID }}"><strong>...</strong></a></p>
      </div>
    </div>
  </script>

  <script type="text/template" id="hit-template-table-market-alerts">
    <tr>
      <td><a href="/marketsmart/market-alerts/{{ objectID }}">{{{ _highlightResult.title.value }}}</a></td>
      <td class="small">{{{ pub_date }}}</td>
      <td class="small">{{{ author }}}</td>
      <td><a href="/market-research/jurisdictions/{{ state_id }}">{{{ _highlightResult.state_code.value }}}</a></td>
    </tr>
  </script>
{/literal}
