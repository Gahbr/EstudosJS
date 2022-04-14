$(document).ready(function(){
    $("button").first().click(function(){

        //adicionar um texto no h1
        $("h1").html("você clicou no botão");
    });

    $("button").last().click(function(){
        $("h1").html("");
});
});