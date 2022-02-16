function mostrar(){

   let reader = new FileReader();
   let imagem = document.getElementById('imagem').files[0];
   
   reader.onloadend = function (){  //quando o carregamento finaliza, executa a funcao
   let img = document.createElement('img');
   img.src = reader.result;
   img.width = 500;

   document.getElementById('area').appendChild(img);

}
    reader.readAsDataURL(imagem); 
  
}