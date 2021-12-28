function validaArray(arr, num) {

    try {
        if (!arr && !num) {
            throw new ReferenceError("Nao foi enviado os parametros");
        }

        if (typeof arr != 'object') {
            throw new TypeError("Array precisa ser do tipo 'Object' ")
        }

        if (typeof num != 'number') {
            throw new TypeError("Num precisa ser do tipo 'number' ");
        }

        if (arr.length != num) {
            throw new RangeError("Tamanho inválido");
        }
        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um erro de ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Este é um erro de TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Este é um erro de RangeError");
            console.log(e.message);
        }
        else {
            console.log("Tipo de erro não esperado" + e);
        }


    }
}

console.log(validaArray([0, 1], 2));