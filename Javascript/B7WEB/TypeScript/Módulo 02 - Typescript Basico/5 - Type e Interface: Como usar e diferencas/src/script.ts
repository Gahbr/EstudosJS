type  NomeCompleto = string; // em types usar PascalCase

let nome : string = 'Peckmaster';

type Idade = string | number;
let idade : Idade = 90;

function mostrarIdade(i:Idade){
 return i;
}

//////////////////////////

type User = {  // A diferença entre os 2 é que o type nao é alteravel, o interface sim
    nome:string,
    idade: Number;
};   

interface Userr {
    nome:string;
   
}

interface Userr {
    idade:number; /* adicionando propriedade */
}


function resumo (usuario: User){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo ({
    nome: 'Parakeet',
    idade: 4
})