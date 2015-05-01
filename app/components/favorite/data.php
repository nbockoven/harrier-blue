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

  $sql = "SELECT id, item_id, item_table FROM favorites {$where} ORDER BY item_table";

  $results = $mysqli->query( $sql );

  $foo = [];
  while( $row = $results->fetch_assoc() )
    $foo[ $row['item_table'] ][] = $row;

  echo json_encode( $foo );

  $mysqli->close();
?>
