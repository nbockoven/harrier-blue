<?php
  require '../../../data/config.php';

  $id = json_decode( file_get_contents('php://input') ); // get user from json headers

  if( $id ){
    $sql = "SELECT c.*,
                   GROUP_CONCAT(cr.title ORDER BY cr.id SEPARATOR '|') role_titles,
                   GROUP_CONCAT(o.id ORDER BY cr.id SEPARATOR '|') org_ids,
                   GROUP_CONCAT(o.title ORDER BY cr.id SEPARATOR '|') org_titles
            FROM contacts c
            JOIN contact_roles cr ON c.id = cr.contact_id
            JOIN orgs o ON cr.org_id = o.id
            WHERE cr.active = 1
            AND c.id = {$id}";

    $results = $mysqli->query( $sql );

    $results = $mysqli->query( $sql );

    $foo = [];
    $toUnset = ['role_title', 'org_id',  'org_title'];
    while( $row = $results->fetch_assoc() ){
      foreach( $toUnset as $t )
        $row[$t.'s'] = explode('|', $row[$t.'s']);

      $counter = count( $row['role_titles'] );
      for( $i = 0; $i < $counter; $i++ ){
        foreach( $toUnset as $t )
          $row['roles'][$i][$t] = $row[$t.'s'][$i];
      }

      foreach( $toUnset as $t )
        unset( $row[$t.'s'] );

      $foo[] = $row;
    }

    echo json_encode( $foo );
  }

  $mysqli->close();
?>
