var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
var res = document.getElementById('resultados');

function calcular() {
    var soma = parseInt(num1) + parseInt(num2);

if (num1 == num2 ) {
    res.innerHTML += "Os números 1 e 2 são iguais. ";
} else {
    res.innerHTML+= "Os números 1 e 2 não são iguais. ";
}

res.innerHTML += "Sua soma é " + soma + ", ";
(soma < 10 ) ? res.innerHTML += "que é menor que 10 " : res.innerHTML += "que é maior que 10 ";
(soma < 20 ) ? res.innerHTML += "e menor que 20. " : res.innerHTML += "e maior que 20. ";

//sumir com o botao
document.getElementById('botao').classList.add('hide');

}

/* <!-- Feito por Gabriel Ribeiro -- Github: github.com/Gahbr --> */

    