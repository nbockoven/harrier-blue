<div class="facet">
  <ul class="list-group">
    <!-- facet title -->
    <li class="list-group-item text-center list-group-item-info p-5"><b>Jurisdiction Zip Code</b></li>
    <li class="list-group-item pt-5 pb-5">
      <div class="row">
        <div class="col-lg-6">
          <input type="number" min="0" max="99999" class="form-control input-sm" name="zip" placeholder="Zip Code" onchange="zipCodeFilter( this )">
        </div><!-- .col-sm-6 -->
        <div class="col-lg-6">
          <input type="number" min="0" max="999" class="form-control input-sm" name="radius" placeholder="Radius (miles)" onchange="zipCodeFilter( this )">
        </div><!-- .col-sm-6 -->
      </div><!-- .row -->
    </li>
  </ul>
</div><!-- .facet -->
