var myHeaders = new Headers();
  myHeaders.append("apikey", "0Dj39JGRFUbPc29nIPkKGk1rU2JC80fe");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('form').onsubmit = ()=>{
        var moeda = document.querySelector('#moedaBr').value;

        if(moeda > 0){
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=ARS&from=BRL&amount=${moeda}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                var resultado =  result.result;
               document.querySelector('h2').innerHTML = `$${resultado.toFixed(2)} ARS`;
            }
                )
            .catch(error => console.log('error', error));
            return false;
        }
    
}
    })
