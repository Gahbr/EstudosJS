let pessoa = {
    nome: 'Parakeet',
    sobrenome:'Morningstar',
    idade: 90,
  
    social: {
        facebook:'b7web',
        instagram:{
            url:'@keetpara666',
            seguidores: 666
    },
}};

// let {facebook,instagram} = pessoa.social;
// let {nome, idade, social:{instagram:{url:instagram}} } = pessoa;

// console.log(nome, idade, instagram);

function pegarNomeCompleto({nome,sobrenome = 'silva', social:{instagram:{url:instagram}}}){     //se sobrenome estiver undefined, coloca por "silva"
    return `${nome} ${sobrenome}  (Siga no ${instagram}) `; //usando o template
}

console.log(pegarNomeCompleto(pessoa));