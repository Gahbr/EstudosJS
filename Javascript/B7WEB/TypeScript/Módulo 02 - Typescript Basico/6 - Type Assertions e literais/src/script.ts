
let idadeField = document.getElementById('idade') as HTMLInputElement;
console.log(idadeField.value);
//

function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){

    return `<div style = "text-align: ${alinhamento}">${texto}</div>`; 

}

mostrarTexto('passaro','left');
//

type Opcoes = {
    width: number,
    height: number
}

function configurar ( props: Opcoes | 'auto'){

}


configurar({width:100, height:200});
configurar('auto');
 // configurar('automatico');