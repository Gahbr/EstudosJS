function resumo (usuario:{nome:string, idade?:number}){  // ? significa opcional
    if (usuario.idade !== undefined){
    return `Ola ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else{
        return `Ola ${usuario.nome}, tudo bem?`;
    }

}

// implementação da função  
let u = { 
    nome:'Passarosuke',
    
};

resumo(u);
