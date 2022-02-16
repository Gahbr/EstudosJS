let timer;


function rodar(){
  timer =  setTimeout(function(){
    document.querySelector(".demo").innerHTML = "Rodou!";
},2000);
}

function parar (){ //para o contador antes dele der trigger
    clearTimeout(timer);
}