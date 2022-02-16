let timer;

function comecar(){
     timer = setInterval(showTime,1000); //roda a funcao a cada 1 seg

}

function parar(){
    clearInterval(timer);
}




function showTime(){
    let d = new Date ();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':' + m + ':' + s;


    document.querySelector('.demo').innerHTML = txt;
}

