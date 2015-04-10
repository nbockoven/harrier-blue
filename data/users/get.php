<?php

  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("fad16025bf4a98488c091636cfedec3c441eaa9c.rackspaceclouddb.com​", "root", "ae44a46c-b4d9-45d1-95fc-fb02093d5d0", "navigator");

  $result = $conn->query("SELECT first_name FROM users LIMIT 10");

  $outp = "";
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if ($outp != "") {$outp .= ",";}
      $outp .= '{"Name":"'  . $rs["first_name"] . '",';
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();

  echo($outp);

?>
