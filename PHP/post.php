<?php
$data = json_decode(file_get_contents("php://input"), true);
// $data = file_get_contents("php://input");

error_reporting(E_ALL);
$pagename = 'my_page3';

$newFileName = '../posts/' . $pagename . ".html";
$newFileContent = $data;

$response = [];
if (file_put_contents($newFileName, $newFileContent) !== false) {
    $response['message'] = 'FIle created';
    // echo "File created (" . basename($newFileName) . ")";
} else {
    $response['message'] = 'Fail creaate file';
    // echo "Cannot create file (" . basename($newFileName) . ")";
}

$response = json_encode($response);
echo $response;