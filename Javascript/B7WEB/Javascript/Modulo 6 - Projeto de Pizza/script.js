 let modalQt = 1; 
 let cart = [];
 let modalKey = 0;

const c = (el)=> document.querySelector(el); // simplificando codigo com funcao anonima
const cs = (el)=> document.querySelectorAll(el); 

//listagem das pizzas 
pizzaJson.map((pizza, index)=>{ //mapear com arrow function

    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preencher as informações em pizza-item

    pizzaItem.setAttribute('data-key',index); //uma id para cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${pizza.price.toFixed(2)}`; //template string e formatação preço
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{ //evento de click para n atualizar a tela
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        console.log("PIZZA CLICADA: "+key); //diferenciar cada pizza no modal
        console.log(pizzaJson[key]);

        //preenchendo as informacoes da pizza no modal
        c('.pizzaBig img' ).src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name; 
        c('.pizzaInfo--desc' ).innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice' ).innerHTML = `RS ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected' ).classList.remove('selected');
        cs('.pizzaInfo--size' ).forEach((size,sizeIndex) => {
            if(sizeIndex ==2){
                size.classList.add('selected');  //destacar a aba de peso grande da pizza qnd abrir
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        }); 
        c('.pizzaInfo--qt').innerHTML = modalQt;  




        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1; //animação de transicao
        })
    }
    )
   

    c('.pizza-area').append(pizzaItem);
        
}); 

//Eventos do MODAL
function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    },500);

}

cs('.pizzaInfo--cancelButton','.pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click',closeModal);
});


 c('.pizzaInfo--qtmenos').addEventListener('click',()=>{ //diminuir qnt pizza e n limita em 1
    if(modalQt>1){
        modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;  
    }
 });

 c('.pizzaInfo--qtmais').addEventListener('click',()=>{ //aumentar qnt pizza
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;  

});

cs('.pizzaInfo--size' ).forEach((size,sizeIndex) => { //desmarca  o destaque e seleciona o novo
   size.addEventListener('click',(e)=>{
    c('.pizzaInfo--size.selected' ).classList.remove('selected');
    size.classList.add('selected');
   });
}); 

c('.pizzaInfo--addButton').addEventListener('click',()=>{
 //qual o tamanho
 let size = parseInt(c('.pizzaInfo--size.selected' ).getAttribute('data-key'));
 console.log("tamanho: "+ size);

 let identifier = pizzaJson[modalKey].id+'@'+size;

 let key = cart.findIndex((item)=>item.identifier == identifier); 
    if (key > -1 ){
        cart[key].qt += modalQt;
    }else {
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size:size,
            qt:modalQt
        });
    }
    updateCart();
    closeModal();
});

c('.menu-opener').addEventListener('click',()=>{
    if(cart.length > 0){
       c('aside').style.left = '0'; 
    }
});

c('.menu-closer').addEventListener('click',()=>{
    c('aside').style.left = '100vw';
})
function updateCart(){
    c('.menu-opener span').innerHTML = cart.length;
    if(cart.length >0){
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart){
            let pizzaItem = pizzaJson.find((item)=> item.id == cart[i].id);
            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = c('.models .cart--item').cloneNode(true);
            
            let pizzaSizeName;
            switch(cart[i].size){
             case 0: 
                pizzaSizeName = 'P';
                break;
             case 1:
                 pizzaSizeName = 'M';
                 break;
             case 2:
                 pizzaSizeName = "G";
                 break;    
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qt > 1){
                cart [i].qt--; } 
                else{
                cart.splice(i,1);
                    }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart [i].qt++;
                updateCart();
            });
            c('.cart').append(cartItem);
            
        } 

        desconto = subtotal *0.1;
        total = subtotal - desconto;
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
    }else{
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';
    }

}
