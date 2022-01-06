// cria um novo array e nao modifica o original 

//Retorna os elementos de um array que cumprem uma condicao especificada numa funcao de callback

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

var filter = frutas.filter((fruta) => fruta.includes('maçã'));

console.log(filter);