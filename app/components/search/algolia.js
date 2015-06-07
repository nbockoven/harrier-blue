$(document).ready(function() {
  // query input field
  var $q = $('input[name=q]:visible');
  // templates
  var $facetTemplate      = Hogan.compile( $('#facet-template').text() );
  var $filtersTemplate    = Hogan.compile( $('#filters-template').text() );
  var $paginationTemplate = Hogan.compile( $('#pagination-template').text() );
  var $statsTemplate      = Hogan.compile( $('#stats-template').text() );

  // algolia client
  var client = algoliasearch('BOE897XSW4', 'eb6ae2df06c2aa6298253316e22f6154');

  // algolia search helper
  var helper = {};

  var tables = ['bids', 'contracts', 'market-alerts', 'orgs', 'contacts'];
  // var tables = ['bids'];

  $.each( tables, function( i, table ){
    switch( table ){
      case 'bids':
        var injunctives  = [];
        var disjunctives = ['status', 'type', 'state_code', 'categories', 'jurisdiction_type', 'using_org_function_type'];
        var perPage      = ( $('#results-per-page-bids').val() ) ? $('#results-per-page-bids').val() : 50;
        break;
      case 'contacts':
        var injunctives  = [];
        var disjunctives = ['state_code', 'roles.quickpick', 'roles.org_type', 'roles.title'];
        var perPage      = ( $('#results-per-page-contacts').val() ) ? $('#results-per-page-contacts').val() : 50;
        break;
      case 'contracts':
        var injunctives  = [];
        var disjunctives = ['status', 'state_code', 'products', 'categories'];
        var perPage      = ( $('#results-per-page-contracts').val() ) ? $('#results-per-page-contracts').val() : 50;
        break;
      case 'market-alerts':
        var injunctives  = [];
        var disjunctives = ['state_code', 'products', 'author', 'state_id'];
        var perPage      = ( $('#results-per-page-market-alerts').val() ) ? $('#results-per-page-market-alerts').val() : 50;
        break;
      case 'orgs':
        var injunctives  = [];
        var disjunctives = ['state_code', 'org_type', 'function_type', 'products'];
        var perPage      = ( $('#results-per-page-orgs').val() ) ? $('#results-per-page-orgs').val() : 50;
        break;
    }
    // AlgoliaHelper settings
    helper[table] = algoliasearchHelper(client, table, {
      facets: injunctives,
      disjunctiveFacets: disjunctives,
      hitsPerPage: perPage,
      maxValuesPerFacet: 50,
      getRankingInfo : true
    });
    // AlgoliaHelper events
    helper[table].on( 'change', function( state ){
      setURLParams( state );
    });
    helper[table].on( 'error', function( error ){
      console.log( error );
    });
    /*helper.on( 'result', function(content, state) {
      renderStats(content);
      renderHits(content);
      renderFacets(content, state);
      renderPagination(content);
      bindSearchObjects();
    });*/
    helper[table].on( "result", searchCallback );
  });



  // run search with each key in keyword input field
  $q.keyup( function( e ){
    $.each( helper, function( i ){
      helper[i].setQuery( $q.val() ).search();
    });
  });

  // run search with each facet toggle
  window.toggleRefine = function(facet, value) {
    $.each( helper, function( i ){
      helper[i].toggleRefine(facet, value).search();
    });
  }


  // initial search (if on search page)
  if( location.hash == '#/search' ){
    initWithUrlParams();
    $.each( helper, function( i ){
      helper[i].search();
    });
  }



  // Helpers
  Number.prototype.numberWithDelimiter = function( delimiter ){
    var number = this + '', delimiter = delimiter || ',';
    var split = number.split('.');
    split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter);
    return split.join('.');
  };

  function sortByCountDesc(a, b) { return b.count - a.count; }
  function sortByNumAsc(a, b) { return parseInt(a.label) - parseInt(b.label); }


  // search callback function (process results)
  function searchCallback( content, state ) {

    // console.log( content );
    // console.log( state );

    if( content.query != $q.val() ){
      // do not consider out-dated queries
      return;
    }

    // handle no results
    if( content.hits.length == 0 ){
      // no results
      /*$('#hits').empty();
      $('#facets').empty();
      $('#disjunctive-facets').empty();*/
      return;
    }

    // assign templates
    var $hitsModule        = $('#hits-module-'+content.index);
    var $hitsTable         = $('#hits-table-'+content.index+' tbody');
    var $pagination        = $('#pagination-'+content.index);
    var $stats             = $('[name="stats-'+content.index+'"]');
    var $hitModuleTemplate = Hogan.compile( $('#hit-template-module-'+content.index).text() );
    var $hitTableTemplate  = Hogan.compile( $('#hit-template-table-'+content.index).text() );
    var $facets            = $('#facets-'+content.index);
    var $sliderTemplate    = Hogan.compile( $('#slider-template-'+content.index).text() );
    var $filters           = $('#filters-'+content.index);


    // stats: render the number of results + processing time
    $stats.html(
      $statsTemplate.render({
        query: content.query,
        nbHits: content.nbHits.numberWithDelimiter(),
        processingTimeMS: content.processingTimeMS,
        nbHits_plural: content.nbHits != 1
      })
    );


    // populate count in tabs
    if( content.nbHits )
      $('#count-'+content.index).text( "(" + content.nbHits.numberWithDelimiter() + ")" );
    else
      $('#count-'+content.index).text("");


    // Scan all hits and display them
    var htmlModule = ''; // html for module / list view
    var htmlTable  = ''; // html for table view
    var num_hits   = content.hits.length; // number of hits (saved for speed in for loop)
    var ids        = []; // collect ids for download button
    for( var i = 0; i < num_hits; ++i ){
      var hit = content.hits[i];

      ids.push( hit.id ); // collect ids for download button

      // convert dates format
      var dates = ['pub_date', 'due_date', 'mod_date', 'expiration_date'];
      $.each( dates, function( ind, date ){
        if( $.isNumeric( hit[date] ) )
          hit[date] = (new Date( hit[date] * 1000 )).toLocaleDateString();
      });

      // parse number fields
      var numbersFields = ['total_budget', 'total_it_budget', 'population', 'num_employees'];
      $.each( numbersFields, function(){
        if( hit[this] === 0 )
          hit[this] = '-';
        if( $.isNumeric( hit[this] ) )
          hit[this] = parseInt( hit[this] ).numberWithDelimiter();
      });

      // translate bid types
      switch( hit.type ){
        case 'DEV-OPPS':
          hit.type = 'Developing Opportunity';
          hit.fav_type = 'devopps';
          break;
        case 'CONTRACT':
          hit.type = 'Contract';
          hit.fav_type = 'contracts';
          break;
        case 'PRE-RFP':
          hit.type = 'Pre-RFP';
          hit.fav_type = 'bids';
          break;
        case 'SOLE_SOURCE':
          hit.type = "Sole Source";
          hit.fav_type = 'bids';
          break;
        case 'RFP':
        case 'ERATE':
          hit.fav_type = 'bids';
      }

      // comma deliminate contact roles title
      if( hit.roles ){
        var role_list = '';
        var comma = '';
        for( var n = 0; n < hit.roles.length; n++ ){
          if( hit.roles[n].title.length ){
            role_list += comma + hit.roles[n].title;
            comma = ', ';
          }
        }
        hit.role_list = role_list;
      }

      htmlModule += $hitModuleTemplate.render( hit ); // return list view html
      htmlTable += $hitTableTemplate.render( hit ); // return table view html
    }
    $hitsModule.html( htmlModule ); // insert list view html
    $hitsTable.html( htmlTable ); // insert table view html

    // add collected ids to related download link href
    // use ids to know which rows to pull from database, and determine in what order
    $('[name="download-'+content.index+'"]').attr('href', "?download_csv="+content.index+"&ids="+ids.join(",") );


    // Scan all disjunctive facets and display them
    var htmlFacets = '';
    num_facets = content.disjunctiveFacets.length; // save for speed in for loop
    for( var i = 0; i < num_facets; i++ ){
      var facet = content.disjunctiveFacets[ i ];

      switch( facet.name ){
        case 'state_code':
          facet.title = 'State';
          break;
        case 'jurisdiction_type':
        case 'org_type':
        case 'roles.org_type':
          facet.title = 'Government Level';
          break;
        case 'using_org_function_type':
        case 'function_type':
          facet.title = 'Function';
          break;
        case 'roles.quickpick':
          facet.title = 'Roles';
          break;
        default:
          facet.title = facet.name.replace(/_/g, " ").toLowerCase().capitalize();
      }

      var listFacets = [];
      var counter = 0;
      $.each( facet.data, function( key, value ){
        listFacets[counter] = {
          label: key,
          count: value.numberWithDelimiter(),
          isRefined: ( helper[content.index].isRefined(facet.name, key) ) ? true : false
        };
        counter++;
      });

      htmlFacets += $facetTemplate.render({
        title: facet.title,
        name: facet.name,
        values: listFacets.slice(0, 5),
        has_other_values: listFacets.length > 5,
        other_values: listFacets.slice(5),
        disjunctive: true
      });
    }
    $facets.html( htmlFacets ); // insert facet html

    // change URL
    setURLParams( state );
  }


  function resultsPerPage( index, select ){
    helper[index].options.hitsPerPage = $(select).val();
    // perform the query
    helper[index].search();
  }


  function initWithUrlParams() {
    var sPageURL = location.hash;
    if (!sPageURL || sPageURL.length === 0) { return true; }
    var sURLVariables = sPageURL.split('&');
    if (!sURLVariables || sURLVariables.length === 0) { return true; }
    var query = decodeURIComponent(sURLVariables[0].split('=')[1]);
    $q.val(query);
    $.each(helper, function( i ){
      helper[i].setQuery( query );
    });

    for (var i = 2; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      var facet = decodeURIComponent(sParameterName[0]);
      var value = decodeURIComponent(sParameterName[1]);
      $.each(helper, function( i ){
        helper[i].toggleRefine(facet, value, false);
      });
    }
    // Page has to be set in the end to avoid being overwritten
    // var page = decodeURIComponent(sURLVariables[1].split('=')[1])-1;
    // helper.setCurrentPage(page);
  }


  function setURLParams( state ){
    var urlParams = '#';
    var currentQuery = state.query;
    urlParams += 'q=' + encodeURIComponent(currentQuery);
    var currentPage = state.page+1;
    urlParams += '&page=' + currentPage;
    for (var facetRefine in state.facetsRefinements) {
      if( typeof state.facetsRefinements[facetRefine] === 'string' )
        urlParams += '&' + encodeURIComponent(facetRefine) + '=' + encodeURIComponent(state.facetsRefinements[facetRefine]);
    }
    for (var disjunctiveFacetrefine in state.disjunctiveFacetsRefinements) {
      for (var value in state.disjunctiveFacetsRefinements[disjunctiveFacetrefine]) {
        if( typeof state.disjunctiveFacetsRefinements[disjunctiveFacetrefine][value] === 'string' )
          urlParams += '&' + encodeURIComponent(disjunctiveFacetrefine) + '=' + encodeURIComponent(state.disjunctiveFacetsRefinements[disjunctiveFacetrefine][value]);
      }
    }
    location.replace( urlParams );
  }


  function zipCodeFilter( input ){
    obj = $(input);
    // make all input with same name have same value (multi-tabs)
    $('input[name="'+obj.attr('name')+'"]').val( obj.val() );

    // get zip and radius values
    var zip    = parseInt( $.trim( $('input[name=zip]').eq(0).val() ) );
    var radius = parseInt( $.trim( $('input[name=radius]').eq(0).val() ) );

    // if there's a zip to search for...
    if( zip ){
      $.ajax({
        type: 'POST',
        url: "/search/ajax/getlatlng",
        data: {zip: zip},
        dataType: 'json',
        beforeSend: function(){
          obj.after("<span class='form-control-feedback mr-15'><i class='fa fa-spinner fa-spin'></i></span>");
        },
        complete: function(){
          obj.next().remove();
        },
        success: function( output ){
          if( Object.keys( output ).length ){
            $.each( helper, function( i ){
              console.log( i );
              var params = {aroundLatLng: output.lat+','+output.lng};
              if( radius ) params.aroundRadius = Math.round(radius * 1609.34); // convert miles to meters
              search( i, null, params);
            });
          }
        }
      });
    }
  }


  function numericRange( input ){
    if( input ){
      var numericFilter = [];
      input = $( input );
      var name = input.attr('name');
      // make all matching input have same (new) value
      $('input[name="'+name+'"]').val( $.trim( input.val() ) );
      // check which input is changed to apply appropriate numeric filter to query

      name = name.split(':');
      var value = '';
      var filter = '';
      switch( name[0] ){
        case 'lt':
          filter = "<";
          break;
        case 'lte':
          filter = "<=";
          break;
        case 'gt':
          filter = ">";
          break;
        case 'gte':
          filter = ">=";
          break;
        default:
          filter = "=";
      }
      switch( name[1] ){
        case 'pub_date':
          value = ( Date.parse( $.trim( input.val() ) ) / 1000 );
          break;
        default:
          value = parseInt( $.trim( input.val() ) );
      }

      numericFilter = [name[1]+filter, value];

      $.each(helper, function( i ){
        helper[i].addNumericRefinement( name[1], filter, value ).search();
      });
    }
  }



  /**** UI ****/

  // toggle active tab buttons
  $(document).on('shown.bs.tab', 'a[data-toggle=tab]', function(){
    $(document).find('a[data-toggle=tab]').removeClass('active');
    $(this).addClass('active');
  });


  // listing view toggle ( list / table views )
  $(document).on('click', '[name^="view_as-"]', function(){
    var link    = $(this);
    var actions = link.attr('name').split('-');
    var view    = actions[1];
    if( actions[2] == 'market' ) actions[2] = "market-alerts";
    var tab  = actions[2];
    var icon = link.children('i').eq(0);
    // get counterpart
    var counterpart = ( view == 'module' ) ? 'table' : 'module';

    // hide counterpart
    $('#hits-'+counterpart+'-'+tab).hide();
    // show view
    $('#hits-'+view+'-'+tab).show();

    // switch icon
    if( icon.hasClass('fa-list') ){
      icon.addClass('fa-table').removeClass('fa-list');
      link.attr('name', 'view_as-table-'+tab)
          .attr('data-original-title', 'Table view');
    }
    else{
      icon.addClass('fa-list').removeClass('fa-table');
      link.attr('name', 'view_as-module-'+tab)
          .attr('data-original-title', 'List view');
    }
  });


  function showMoreLess( link ){
    $(link).closest('ul').find('.show-more').toggle();
  }


  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };


  function goToPage( params ){
    window.location.hash = decodeURIComponent( params );
    window.location.reload( true );
  }


  function toggleFilters(){
    $('[name=filters]').each(function(){
      var filter = $(this);
      if( filter.hasClass('hidden-xs') )
        filter.removeClass('hidden-xs');
      else
        filter.addClass('hidden-xs');
    });
  }




});
