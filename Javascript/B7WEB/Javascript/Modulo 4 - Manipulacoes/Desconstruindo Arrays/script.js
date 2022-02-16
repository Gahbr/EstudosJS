let info = [ 'Parakeet', 'Passaro','Birb','@keetson666'];

let [nomeCompleto, , , instagram ] =  info;


function criar(){
    return [1,2,3];
}

let [a,b,c] = criar(); 

console.log(nomeCompleto, instagram);
console.log(a,b,c);