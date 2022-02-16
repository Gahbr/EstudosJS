let nome = "Passarosuke ";
let nome2 = 'parakeet';
let nome3 = "         paraquite      ";
let nome4 = "passaro das trevas";

let resultado = nome.slice(0,12); // slice é a mesma coisa que o comando substring

let resultado2 = nome2.replace('parakeet','Parakeetson');

let resultado3 = nome3.trim(); // corta os espaços desnecessarios na string

//  let resultado = nome.charAt(3)   a funcao charAt diz qual caractere esta na posicao

let resultado4 = nome4.split(' '); //divide string por array

console.log("resultado:", resultado);
console.log(resultado3);
console.log(resultado4);