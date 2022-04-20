<?php

$url = "127.0.0.1";
$usuario= "root";
$senha = "1234";
$base = "apiAngular";

//conexao
$conexao = mysqli_connect($url, $usuario, $senha, $base);

//Arrumar caracteres especiais
mysqli_set_charset($conexao, "utf8");

?>