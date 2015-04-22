<?php
  define('DB_USERNAME', 'web_sites_admin');
  define('DB_PASSWORD', 'w3b_s1t3s_4dm1n');
  define('DB_HOST', '104.130.144.251');
  define('DB_NAME', 'navigator_dev');

  $mysqli = new mysqli( DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME );
  if( $mysqli->connect_errno )
    echo "Failed to connect. (".$mysqli->connect_errno.") ".$mysqli->connection_error."\n";
?>
