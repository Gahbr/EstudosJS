$(document).ready(function(){
   
    //exibir
    $(".exibir").click(function(){
        $(".mensagem").slideDown();
    })
    //ocultar
    $(".ocultar").click(function(){
        $(".mensagem").slideUp();
    })
})