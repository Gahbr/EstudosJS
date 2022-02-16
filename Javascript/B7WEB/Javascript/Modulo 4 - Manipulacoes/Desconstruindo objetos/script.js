let pessoa = {
    nome: 'Parakeet',
    sobrenome:'Morningstar',
  
    social: {
        facebook:'b7web',
        instagram:'keetpara666'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};



let {nome, sobrenome, idade = 90} = pessoa; //desconstruindo


console.log(nome,sobrenome,idade);