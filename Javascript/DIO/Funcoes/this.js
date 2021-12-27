function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
console.log(calculaIdade(23));


const pessoa1 = {
    nome:"Parakeet",
    idade:4
}

const pessoa2 = {
    nome:'Passarosuke',
    idade:10
}

console.log(calculaIdade.call(pessoa2,30));