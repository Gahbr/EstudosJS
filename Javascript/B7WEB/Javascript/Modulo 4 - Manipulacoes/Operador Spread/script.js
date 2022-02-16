let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8] //pega os elementos de numeros e complementa

let info = {
    nome:'Lorde',
    sobrenome:'Passaro',
    idade: 99
};

let novaInfo = {
    ...info,
    cidade: 'Brasilia',
    Estado:'Df',
    pais:'Brasil'
    
};



function adicionarInfo(info2){
    let novaInfo = {
        ...info2,
        status:0,
        token:'asdfas'
    };
    return novaInfo;
}

console.log(adicionarInfo({nome:'Parakeet',sobrenome:'parakeetson'}));


