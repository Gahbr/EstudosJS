alert("Estou funcionando!");

document.getElementById("titulo").innerHTML = "opa"; //manipulando elemento html

document.write(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "); 

console.log("a mensagem que eu inseri aqui aparecerá no console");


var nome = "Gabriel";
var sobrenome = "Ribeiro";
var nomecompleto = nome + " " + sobrenome;

 alert(nomecompleto);



 var hora = 12;

 if (hora< 12) {
    console.log("Bom dia");
 } else if(hora <18){
     console.log("boa tarde");
 } else if(hora <=23){
     console.log("Boa noite");
 }


 /* if(hora >=12 && hora <18){
     console.log("Boa tarde");
 }

*/
 if(hora ==12 || hora==18 ){
     console.log("você está na hora do rush");
 }


 // a variavel let só fica disponivel em uma area especifica do codigo. let nome = "Gabriel";
 
// a const é uma variavel constante const nome = "Gabriel";