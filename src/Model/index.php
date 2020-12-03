<?php

require "../Model/featured.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API o front end
header("Content-type: application/json");   //Indicação de arquivo JSON 

$featured = Featured::getAll();

echo json_encode($featured);