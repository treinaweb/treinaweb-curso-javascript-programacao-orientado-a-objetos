class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    androu() {
        console.log(`A pessoa ${this.nome} andou`);
    }
}

class Aluno extends Pessoa {
    nota;
    constructor(nome, idade, nota) {
        super(nome, idade);
        this.nota = nota;
    }

    androu() {
        console.log(`O aluno ${this.ariel} andou`)
    }
}

class Paulo extends Aluno {

    constructor(nome, idade, nota) {
        super(nome, idade, nota);
    }

    androu() {
        console.log(`O  ${this.nome} andou`)
    }
}

const ariel = new Paulo('Ariel', 29, 10);
console.log(ariel);
console.log(ariel.androu());
