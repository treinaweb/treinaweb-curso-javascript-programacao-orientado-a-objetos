// Define as operações que um objeto 
// será obrigado a implementar.

class Pessoa {
    constructor() {
        if (new.target === Pessoa) {
            throw new Error('Está classe é interface e não pode ser instanciada');
        }
    }

    andar() {
        throw new Error('o método andar precisa ser implementado')
    }
}

class Aluno extends Pessoa {
    nota;
    nome;
    idade;
    constructor(nome, idade, nota) {
        super();
        this.nota = nota;
        this.nome = nome;
        this.idade = idade;
    }

    andar() {
        console.log(`O ${this.nome} andou`)
    }
}

const ariel = new Aluno('Ariel', 29, 10);
ariel.andar();
console.log(ariel);