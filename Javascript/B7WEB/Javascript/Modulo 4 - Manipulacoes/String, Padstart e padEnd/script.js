let telefone = '5';

console.log(telefone.padEnd(9,'*') ); // caso string tiver <9 caracteres, preencha o espaço com *
console.log(telefone.padStart(9,'-----') );


let cartao = '1234123412341234';
alert('Este é o seu cartão? ' +cartao);

let lastDigits = cartao.slice(-4); // pega os ultimos 4 numeros e tira o resto
let cartaoMascarado = lastDigits.padStart(16,'*'); // colocando * até os ultimos 4 numeros
alert('Este é o seu cartão? ' +cartaoMascarado.padStart() );
