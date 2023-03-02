// ECMAScript 2022

class Pessoa {
    #nome = '';
    constructor(nome) {
        this.#nome = nome;
    }

    andar() {
        console.log(`A pessoa ${this.#nome} andou`);
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }
}

const ariel = new Pessoa('Ariel');
ariel.nome = 'Pedro';
console.log(ariel.nome);