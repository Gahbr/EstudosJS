import { mostraCidade,mostraHobby,mostraIdade } from "./funcoes.mjs"; './funcoes'

var res = document.getElementById('res');

res.innerHTML= mostraIdade("Parakeet",4);
console.log(mostraIdade('Parakeet',4));

console.log(mostraHobby('comer alpiste'));
console.log(mostraCidade('Gama'));