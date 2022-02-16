let lista =[45,4,9,16,25];
let lista2 = [];
let lista3 = [ {id:1, nome: 'Parakeet', sobrenome:'Son'},
                {id:2, nome:'Lorde',sobrenome:'Passaro'},
                {id:3, nome:'Birb',sobrenome:'Birbson'}];


let pessoa = lista3.find(function(item){
    return (item.sobrenome =='Birbson')? true: false;
});


let res = pessoa;





/*
lista2= lista.find(function(item){
    return (item ==16) ? true:false; //alterativa de if
});

lista2= lista.findIndex(function(item){ //mostra a posicao do item
    return (item ==16) ? true:false; 
});

*/





console.log(res);

