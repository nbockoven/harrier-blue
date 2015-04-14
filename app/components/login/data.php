<?php
  $user = json_decode( file_get_contents('php://input') ); // get user from json headers
  if( $user->email == 'nbockoven@gmail.com' && $user->password == 'tumtum' )
    echo 'success';
  else
    echo 'error';
?>
