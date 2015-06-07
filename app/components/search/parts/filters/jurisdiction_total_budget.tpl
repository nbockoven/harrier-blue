<div class="facet">
  <ul class="list-group">
    <!-- facet title -->
    <li class="list-group-item text-center list-group-item-info p-5"><b>Jurisdiction Total Budget</b></li>
    <li class="list-group-item pt-5 pb-5">
      <div class="row">
        <div class="col-lg-6">
          <input type="number" min="0" class="form-control input-sm" name="gte:total_budget" placeholder="From..." onchange="numericRange( this )">
        </div><!-- .col-sm-6 -->
        <div class="col-lg-6">
          <input type="number" min="0" class="form-control input-sm" name="lte:total_budget" placeholder="To..." onchange="numericRange( this )">
        </div><!-- .col-sm-6 -->
      </div><!-- .row -->
    </li>
  </ul>
</div><!-- .facet -->
