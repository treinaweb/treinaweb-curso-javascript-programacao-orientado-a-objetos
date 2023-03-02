// ECMAScript 2015

class Pessoa {
    nome = '';
    constructor(nome) {
        this.nome = nome;
    }


    andar() {
        console.log(`A pessoa ${this.nome} andou`);
    }
}

const ariel = new Pessoa('Ariel');
console.log(ariel);