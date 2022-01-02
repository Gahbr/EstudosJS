function loadPosts(){

    document.getElementById("posts").innerHTML = 'Carregando...</br>';
      fetch ('https://thatcopy.pw/catapi/rest/') //retorna uma promise 
      
          .then(function(resultado){
            return resultado.json();
          })
          .then(function(json){
              var elem = document.createElement("img");
              elem.src = json.url;
              document.getElementById("posts").innerHTML = '';
              document.getElementById("posts").appendChild(elem);
             

          })
          .catch(function(){
              console.log("deu problema!");
          })
      }
      

