document.addEventListener('DOMContentLoaded', ()=>{
    console.log(document.querySelector('#add').length);
    document.querySelector('#submit').disabled = true;


    
    // option select
   document.querySelector('select').onchange= function(){
   
       document.querySelector('h1').style.color = this.value;
   }
   //submit
    document.querySelector('#add').onkeyup = ()=>{
        if (document.querySelector('#add').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
        
    }
   //todo
   document.querySelector('form').onsubmit = ()=>{
          const task =  document.querySelector('#add').value;
      const li=  document.createElement('li');
       li.innerHTML = task;
        document.querySelector('#tasks').append(li)
      return false;
   }
   
}) 