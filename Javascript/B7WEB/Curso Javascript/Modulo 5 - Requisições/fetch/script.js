function loadPosts(){

    document.getElementById("posts").innerHTML = 'Carregando...';
      fetch ('https://jsonplaceholder.typicode.com/posts') //retorna uma promise 
      
          .then(function(resultado){
            return resultado.json();
          })
          .then(function(json){
              document.getElementById("posts").innerHTML = json.length + ' posts ';
          })
          .catch(function(){
              console.log("deu problema!");
          })
      }
      

