<?php
/* Provides JSON data for the client. */

// File containing the data
$filename = "data.json";

// Reading file and echoing content
$data = file_get_contents($filename);

header('Content-Type: application/json');
echo $data;

?>