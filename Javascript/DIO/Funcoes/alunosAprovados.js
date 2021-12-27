const alunos = [{
    nome: "parakeet",
    nota: 5,
    turma: "A"
},
{
    nome: "passarosuke",
    nota: 7,
    turma: "B"
},
{
    nome: "Birbovsky",
    nota: 2.4,
    turma: "A"
},
{
    nome: "Nameless",
    nota: 8,
    turma: "B"
},
];

function alunosAprovados(arr, media) {

    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    
return aprovados;

}

console.log(alunosAprovados(alunos, 5));