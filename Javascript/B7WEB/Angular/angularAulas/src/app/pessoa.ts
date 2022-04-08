export class Pessoa {
    public id : number;
    public nome : string;
    public idade : number;

    constructor(id: number, nome: string, idade: number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    getTipo() {
        if (this.idade <= 15) {
            return 'criança';
        }else if (this.idade >15 && this.idade <= 20) {
            return 'Jovem';
        }else if (this.idade > 20 && this.idade <= 50) {
            return 'Adulto';
        }else if (this.idade > 50 && this.idade <= 80) {
            return 'Idoso';
        } else if (this.idade >80) {
            return 'Taoist Kungfu master';
        }
    }
}
