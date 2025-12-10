<?php

// Arquivo: api/private/utils/functions.php

function returnThisPlaceAsJason(){
    $mainFolder = ["localhost" => dirname(__FILE__, 4), "server" => dirname(__FILE__, 3), "api" => dirname(__FILE__, 2), "web" => dirname(__FILE__, 1), "utils" => dirname(__FILE__)];
    echo json_encode(array("place" => $mainFolder));
}
?>