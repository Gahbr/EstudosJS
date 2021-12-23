document.querySelector('.busca').addEventListener('submit', async (event) => {

event.preventDefault(); // previne o comportamento padrao, ou seja nao envia formulario

let input = document.querySelector('#searchInput').value;

if (input !== '') { //caso input valido
    clearInfo();
    showWarning('Carregando...'); //criar aviso 

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=895a7a75f15bc98129e51071433dde9f&units=metric&lang=pt_br`;//encodeURI = converte strings para formato de url

    //fazer requisicao da url
    let results = await fetch(url);
    //pegar os resultados e transformar em um objeto de JS.
    let json = await results.json();

    if (json.cod === 200) {   // se tiver achado cidade

        //preencher o resultado 
    showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAng: json.wind.deg,
        climaInfo: json.weather[0].description

    });
    } else {
        clearInfo();
        showWarning("Não encontramos essa localização.")
    }

} else{
    showWarning("Insira uma cidade!")
}
})


function showWarning(msg) { //mostrar texto de aviso apos clicar no botao
    document.querySelector('.aviso').innerHTML = msg;
}

function showInfo(json) {
    showWarning(''); //apagar msg de aviso

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`; //mostrar cidade
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

    // trocar html setado para o icone do atual clima
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`); 
    //angulo do vento -90, que é a compensação da pos padrao
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAng - 90}deg)`;
    document.querySelector('.resultado').style.display = "block" //mostrar div de resultado no css
    document.querySelector('.climaInfo').innerHTML = `${json.climaInfo}`
}

//limpar tela 
function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}