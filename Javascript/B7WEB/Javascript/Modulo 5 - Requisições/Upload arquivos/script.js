async function enviar (){
    let arquivo = document.getElementById('arquivo').files[0]; //pega o primeiro da lista
        
    let body = new FormData();
    body.append('title', 'blabla');
    body.append('arquivo',arquivo);

    let req = await fetch('https://www.meusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    
} 