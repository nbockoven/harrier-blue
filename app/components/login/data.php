<?php
  require '../../../data/config.php';

  $user = json_decode( file_get_contents('php://input') ); // get user from json headers

  $sql = "SELECT * FROM users WHERE email = '".addslashes( $user->email )."' AND password = '".md5( $user->password )."'";

  $results = $mysqli->query( $sql );
  if( $results->num_rows )
    echo 'success';
  else
    echo 'error';

  $mysqli->close();
?>
