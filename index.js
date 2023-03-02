function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const p1 = new Pessoa("ariel", 29);


const p2 = Object.create(p1);

const p3 = new p1.constructor('elton', 49);


console.log(p2);