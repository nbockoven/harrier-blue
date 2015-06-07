{literal}
  <script type="text/template" id="hit-template-module-contracts">
    <div class="hit media">
      <div class="media-body">
        <h4 class="media-heading">
          <a href="/opportunities/contracts/{{ id }}">{{{ _highlightResult.contract_title.value }}}</a>
          <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="contracts" data-toggle="tooltip" data-placement="bottom" title="Add/Remove bookmark">
            <i class="fa fa-plus-square-o text-danger"></i>
          </a>
          <br>
          <small class="text-muted"><strong>Vendor:</strong> {{{ _highlightResult.vendor.title.value }}}</small>
        </h4>
        <ul class="list-inline text-muted mb-5">
          {{#state_code}}<li><strong>State:</strong> <a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ state_code }}}</a></li>{{/state_code}}
          {{#expiration_date}}<li><strong>Expiration:</strong> {{{ expiration_date }}}</li>{{/expiration_date}}
          <li><strong>Renewals:</strong> {{{ num_renewals }}}</li>
        </ul>
      </div>
    </div>
  </script>

  <script type="text/template" id="hit-template-table-contracts">
    <tr>
      <td><a href="/opportunities/contracts/{{{ id }}}">{{{ _highlightResult.contract_title.value }}}</a></td>
      <td>{{{ _highlightResult.vendor.title.value }}}</td>
      <td><a href="/market-research/jurisdictions/{{{ state_id }}}">{{{ state_code }}}</a></td>
      <td>{{{ expiration_date }}}</td>
      <td class="text-center">{{{ num_renewals }}}</td>
      <td class="text-center">
        <a href="javascript:void(0);" favorite-id="{{{ id }}}" favorite-type="contracts">
          <i class="fa fa-plus-square-o text-danger"></i>
        </a>
      </td>
    </tr>
  </script>
{/literal}
