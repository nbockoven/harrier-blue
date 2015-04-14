$(document).ready(function(){

  // tooltips
  $(document).find('[data-toggle=tooltip]').tooltip();



});

function togglePassword( link ){
  link      = $(link);
  var eye   = link.children('.fa').eq(0);
  var input = link.parents('.input-group').eq(0).find('input');
  switch( input.attr('type') ){
    case 'password':
      input.attr('type', 'text');
      eye.addClass('fa-eye-slash').removeClass('fa-eye');
      break;
    default:
      input.attr('type', 'password');
      eye.addClass('fa-eye').removeClass('fa-eye-slash');
  }
}
