<?php
    include("conexao.php");

    $obterDados = file_get_contents("php://input");

    //extrair dados do json
    $extrair = json_decode($obterDados);

    //separar os dados do json
    $idCurso = $extrair->cursos->idCurso;


    //SQL
    $sql = "DELETE FROM cursos WHERE idCurso= $idCurso";
    mysqli_query($conexao, $sql);
    


?>