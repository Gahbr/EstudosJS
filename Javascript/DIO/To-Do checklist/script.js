function add() {

var input = document.getElementById('texto').value;
var lista = document.getElementById("lista");


if(input==0){
    alert("Campo em branco. Tente novamente!");
} else{
    
// criando input
var checkbox = document.createElement('input');

// definindo os atributos da checkbox
checkbox.type = "checkbox";
checkbox.value = "value";
checkbox.id = "id";

// criando label para texto da checkbox
var label = document.createElement('label');

// colocando atributos para a tab label
label.htmlFor = "id";

// dando append no texto criado para a tag label
label.innerHTML += input + "</br>"

// dando append na checkbox e label para a div
    lista.appendChild(checkbox);
    lista.appendChild(label);
    }
}

function limparTela(){
document.getElementById('lista').innerHTML = "";
}

// Feito por Gabriel Ribeiro -- Github: github.com/Gahbr  