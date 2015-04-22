<?php
  require '../../../data/config.php';

  $params = json_decode( file_get_contents('php://input') ); // get user from json headers

  $where = [];
  $params->published = 1;
  foreach( $params as $key => $value ){
    if( is_numeric( $value ) )
      $where[] = $key." = ".$value;
    else
      $where[] = $key." = '".addslashes($value)."'";
  }

  if( !empty($where) )
    $where = "WHERE ".implode(" AND ", $where);

  $sql = "SELECT
            b.id,
            b.title,
            b.description,
            DATE_FORMAT(b.pub_date, '%c/%e/%Y') pub_date,
            DATE_FORMAT(b.due_date, '%c/%e/%Y') due_date,
            bt.title type
          FROM bids b
          JOIN bid_types bt ON b.type = bt.code
          {$where}
          GROUP BY b.id
          ORDER BY b.pub_date DESC
          LIMIT 10";

  $results = $mysqli->query( $sql );

  $foo = [];
  while( $row = $results->fetch_assoc() ){
    $row['description'] = substr(strip_tags( $row['description'] ), 0, 500);
    $foo[] = $row;
  }

  echo json_encode( $foo );

  $mysqli->close();
?>
