function mostrar(){

    let imagem = document.getElementById("imagem").files[0];
    let img = document.createElement('img');

    img.src = URL.createObjectURL(imagem); //criando url da imagem
    img.width = 500; // definindo largura

    document.getElementById("area").appendChild(img); //append child anexar img
  
}