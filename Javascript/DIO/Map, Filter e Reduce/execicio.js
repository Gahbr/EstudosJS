/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele. */

const array =[1,2,3,4,5];

    //ex 1

console.log("---EX 1---");

    const maca = {
        value:2,
    };

    const laranja = {
        value:3,
    };

    function mapcomThis(arr, thisArg){
        return array.map(function(item) {
            return item * this.value;
        }
        , thisArg);
    }

    console.log("This -> Maçã: " + mapcomThis(array, maca));
    console.log(("This -> Laranja: " + mapcomThis(array, laranja)));


    function  mapsemThis(array){
        return array.map((item) => item * 2,this);
    }  
        console.log(`Map sem this: ${mapsemThis(array)}`);






    //ex 2 

console.log("--- EX 2---");

        function filtraPares(arr){
            return arr.filter(callback);
        }

        function callback(item) {
            return item % 2 == 0;
        }

    console.log("Pares: "+filtraPares(array));
    





    //ex 3.1

console.log("---EX 3.1---");


function somaNum(arr) {
   return  arr.reduce(function (prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

console.log(somaNum(array));


 //ex 3.2
 console.log("---EX 3.2---");

    const lista = [
        {
        name:'sabao em po',
        preco: 30,
         },
         
     {
        name:'cereal',
        preco: 12,
         },
         
 {
        name:'toalha',
        preco: 30,
         },
        
        ];

        const saldoDisponivel = 100;

        function calculaSaldo(saldoDisponivel, lista){
            return lista.reduce( function(prev, current){
                return prev - current.preco;
            }, saldoDisponivel)
        }

        console.log(calculaSaldo(saldoDisponivel,lista));