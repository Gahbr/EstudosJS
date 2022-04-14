$(document).ready(function(){
   
    //animar
    $("button").click(function(){
       $("div").animate({
           width:"400px",
           height:"400px",
       })
    })

    $("h1").css({
        "color":"purple",
        "borderStyle":"solid",

    });
})