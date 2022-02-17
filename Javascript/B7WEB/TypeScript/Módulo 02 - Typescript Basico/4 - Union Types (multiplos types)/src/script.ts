

function mostrarIdade(idade:number | string){
    if(typeof idade ==='string'){
    console.log(idade.toUpperCase());
    }
}

mostrarIdade(90);
mostrarIdade('90');