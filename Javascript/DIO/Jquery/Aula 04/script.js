$(document).ready(function(){
    $("h1").css("display", "none");

    $("#exibir").click(function(){
        $("h1").fadeIn(2000);
    });

    $("#ocultar").click(function(){
        $("h1").fadeOut(2000);
    })
})