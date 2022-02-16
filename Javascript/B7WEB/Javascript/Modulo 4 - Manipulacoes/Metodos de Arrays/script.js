let lista = ['Ovo','Farinha', 'Corante', 'Massa'];

let res = lista.join('-'); // separa array pelo metodo escolhido

lista.pop(); //retira o ultimo elemento do array
lista.shift(); // retira o primeiro... 
lista.push('Prato'); //adiciona novo item
lista[lista.length] = 'Liquidificador'; // outro metodo de add, porem nao recomendado

let res2 = lista;

console.log(res2);