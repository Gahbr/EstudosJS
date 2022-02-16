//array
let carros = [
    {nome: 'chevy', modelo:'opala'},
    'palio',
    'Uno',
    'Corolla',
    'Ferrari'
];

//objeto
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado : false,


    ligar : function(){
        this.ligado = true;
        console.log("carro ligado");
    },
    acelerar : function(){
        if (this.ligado == true){

        
        console.log("acelerando"); } 
        else {
            console.log ("carro não está ligado!");
        }

    }
};

//acessando o objeto
console.log(carro['nome']);
//ou
console.log(carro.nome);

console.log("o modelo é :",carro.modelo); 

carro.ligar();
carro.acelerar();

console.log(carros[0].modelo);