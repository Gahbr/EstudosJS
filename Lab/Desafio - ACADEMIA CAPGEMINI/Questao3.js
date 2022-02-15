function Anagramas(palavra) {
    let resultado = 0;
    var found = {};

    for (let i = 1; i < palavra.length; i++) {
        for (let n = 0; n + i <= palavra.length; n++) {

            /* dividindo a string em partes */
            let substring = palavra.substr(n, i);
            substring = substring.split('').sort().join('');

            if (found[substring]) {
                resultado += found[substring];
                found[substring]++;
                console.log(found['qq']);
            } else {
                found[substring] = 1;
            }
        }
    }

    return resultado;
}

console.log(Anagramas('ifailuhkqq'));