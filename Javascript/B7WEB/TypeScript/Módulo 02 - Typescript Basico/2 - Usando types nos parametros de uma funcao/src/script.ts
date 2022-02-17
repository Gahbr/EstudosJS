 function firstLetterUpperCase(name:string) : string{ /* : funcao retorna uma string */
     let firstLetter = name.charAt(0).toUpperCase;
     return firstLetter+name.substring(1);
 }

 firstLetterUpperCase('ching');


 let names = ['parakeet', 'birb','Seed',90];

 names.forEach( function(nome){
     if(typeof nome ==='string'){
         console.log(nome.toUpperCase());
     } else{
         console.log(nome);
         
     }
    
 })