<?php
// Arquivo: api/index.php

require_once __DIR__ . '/private/utils/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    return returnThisPlaceAsJason();
}
?>