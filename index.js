// É um tipo de classe que somente 
// pode ser herdada e não instanciada.

class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        if (new.target === Pessoa) {
            throw new Error('Está classe é abstrata e não pode ser instanciada');
        }
        this.nome = nome;
        this.idade = idade;
    }

    andar() {
        console.log(`O ${this.nome} andou`);
    }
}

class Aluno extends Pessoa {
    nota;
    constructor(nome, idade, nota) {
        super(nome, idade);
        this.nota = nota;
    }
}

const ariel = new Aluno('Ariel', 29, 10);

console.log(ariel);