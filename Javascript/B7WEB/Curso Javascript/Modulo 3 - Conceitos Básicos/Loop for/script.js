//FOR LOOP 
//FOR LOOP ARRAY

let carros = ['ferrari', 'fusca', 'palio' ,'corolla'];
let  texto = '';
let html = '<ul>';

for(let i = 1;i < 50; i++){
    texto = texto + i + '<br/>';

}


//for loop array
for (let i in carros ) {
  html += '<li>' + carros[i] + '</li>'; //<li> = lista 
    
}
html += '</ul>';

document.getElementById("demo").innerHTML = html; //mostra o loop array

