<?php

//Incluir a conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM cursos";

//Executar a query
$executar = mysqli_query($conexao, $sql);

//Vetor
$cursos = [];

//Indice
$indice = 0;

//Laço
while ($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice] ['idCurso'] = $linha['idCurso'];
    $cursos[$indice] ['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice] ['valorCurso'] = $linha['valorCurso'];
    $indice++;
}

//JSON
json_encode(["dados"=>$cursos]);

var_dump($cursos);
?>