
let num = [5,8,4];
num [3] = 6;
num.push(7); // inserir automaticamente
num.sort(); // sortear ordem alfabetica
console.log(num);
console.log(`O vetor tem ${num.length} posições`);

for (let pos in num){ // modo mais curto de listar os elementos do array
    console.log(num[pos]);
}

pesq = num.indexOf(4);
console.log(`O valor 4 está na posição -> ${pesq}`);
num.indexOf(7); //pesquisa dentro do vetor
