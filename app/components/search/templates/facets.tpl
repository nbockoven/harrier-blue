{literal}
  <script type="text/template" id="facet-template">
    <div class="facet">
      <ul class="list-group">
        <!-- facet title -->
        <li class="list-group-item text-center list-group-item-info p-5"><b>{{ title }}</b></li>

        {{#values}}
          <li class="{{#refined}}refined{{/refined}} list-group-item pt-5 pb-5">
            {{#disjunctive}}
              <div class="checkbox m-0">
                <label>
                  <input class="checkbox" type="checkbox" onclick="toggleRefine('{{ name }}', '{{ label }}'); return false;" {{#isRefined}}CHECKED{{/isRefined}}>
            {{/disjunctive}}

            <a href="#" onclick="toggleRefine(this, '{{ facet }}', '{{ name }}'); return false;" name="{{ name }}">{{ label }}</a> <small class="text-muted">({{ count }})</small>

            {{#disjunctive}}
                </label>
              </div>
            {{/disjunctive}}
          </li>
        {{/values}}

        <!-- other values will only be displayed if the user clicks on the "show more" link  -->
        {{#has_other_values}}
          <!-- "show more" link -->
          <li class="show-more list-group-item pt-5 pb-5"><a href="#" onclick="showMoreLess(this); return false;"><i class="glyphicon glyphicon-chevron-down" /> more</a></li>

          <!-- other values -->
          {{#other_values}}
            <li class="{{#isRefined}}refined{{/isRefined}} show-more list-group-item pt-5 pb-5" style="display: none">
              {{#disjunctive}}
                <div class="checkbox m-0">
                  <label>
                    <input class="checkbox" type="checkbox" onclick="toggleRefine('{{ name }}', '{{ label }}'); return false;" {{#isRefined}}CHECKED{{/isRefined}}>
              {{/disjunctive}}

              <a href="#" onclick="toggleRefine('{{ name }}', '{{ label }}'); return false;" style="word-break:break-word">{{ label }}</a> <small class="text-muted">({{ count }})</small>

              {{#disjunctive}}
                  </label>
                </div>
              {{/disjunctive}}
            </li>
          {{/other_values}}

          <!-- "show less" link -->
          <li class="show-more list-group-item" style="display: none" onclick="showMoreLess(this); return false;"><a href=""><i class="glyphicon glyphicon-chevron-up" /> less</a></li>
        {{/has_other_values}}
      </ul>
    </div>
  </script>
{/literal}
