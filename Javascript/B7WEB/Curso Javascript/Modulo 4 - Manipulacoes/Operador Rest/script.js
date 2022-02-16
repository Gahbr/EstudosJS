function adicionar (...numeros){

    console.log(numeros);
}

adicionar(5,6,7,8,9,0);


function add(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
        return novoConjunto;
}

let nomes = ["parakeet", "Passarosuke"];
let outros = add(nomes,"Birb","Goose");

alert(outros);