var nome = 'Gabriel';
var idade = 90;
var salvo = true;
var cidade; 

//pegando o tipo da variável idade
var tipo = typeof idade;

//mostrando no console o resultado
console.log(tipo);

/* no console do navegador:

typeof nome; mostra tipo da variavel
console.log(nome); 

*/ 


function alterar(){
    document.getElementById
}

function trocarImagem(filename,animalName){

    document.querySelector('.imagem').setAttribute('src','imagem/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal',animalName);
}

function pegarAnimal(){

    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert (animal);
}