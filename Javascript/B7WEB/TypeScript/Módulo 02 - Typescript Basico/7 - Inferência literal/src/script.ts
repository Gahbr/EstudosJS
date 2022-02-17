function fazerRequisicao (url: string, method: 'GET' | 'POST'){
    //...
}

type Methods = 'GET' | 'POST';

let url = 'https://google.com.br';
let method : Methods = 'GET';
let req = {url :'https://google.com.br', method:'GET' };

fazerRequisicao(url , method)