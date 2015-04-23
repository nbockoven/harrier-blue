<?php
  require '../../../data/config.php';

  $id = json_decode( file_get_contents('php://input') ); // get user from json headers

  $sql = "SELECT * FROM contacts WHERE id = {$id}";

  $results = $mysqli->query( $sql );

  $results = $mysqli->query( $sql );

  $foo = [];
  while( $row = $results->fetch_assoc() )
    $foo[] = $row;

  echo json_encode( $foo );

  $mysqli->close();
?>
