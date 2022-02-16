let lista = ['Ovo','Farinha','Corante','Massa'];
let lista2 = ['Prato','Liquidificador','Forno'];

lista.sort(); //ordena em ordem alfabetica
lista.reverse(); // inverte a ordem

let res2 = lista.concat(lista2); // junta 2 arrays
lista.splice(1,1); //deleta

let res = lista;

console.log(res);