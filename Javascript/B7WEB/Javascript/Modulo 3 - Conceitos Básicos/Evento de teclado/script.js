function digitou(){
    console.log('digitou');
}

function digitou2(e){
    console.log(e);

}

function digitou3(e){
    if(e.keyCode == 13){ //enter
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}