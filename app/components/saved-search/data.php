<?php
  require '../../../data/config.php';

  $params = json_decode( file_get_contents('php://input') ); // get user from json headers

  $where = [];
  foreach( $params as $key => $value ){
    if( is_numeric( $value ) )
      $where[] = $key." = ".$value;
    else
      $where[] = $key." = '".addslashes($value)."'";
  }

  if( !empty($where) )
    $where = "WHERE ".implode(" AND ", $where);

  $sql = "SELECT id, uri, title FROM searches {$where} ORDER BY title";

  $results = $mysqli->query( $sql );

  $foo = [];
  while( $row = $results->fetch_assoc() )
    $foo[] = $row;

  echo json_encode( $foo );

  $mysqli->close();
?>
