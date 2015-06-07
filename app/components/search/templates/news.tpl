{literal}
  <script type="text/template" id="hit-template-module-news">
    <div class="item {{#is_active}}active{{/is_active}}">
      <h4>
        <a href="{{ link }}" target="_blank">{{{ _highlightResult.title.value }}}</a> <a href="http://www.{{ site }}" target="_blank" class="small">{{ site }}</a>
      </h4>
      <p class="text-muted">
        {{{ _snippetResult.description.value }}}<a href="{{ link }}" target="_blank"><strong>...</strong></a>
      </p>
    </div>
  </script>
{/literal}
