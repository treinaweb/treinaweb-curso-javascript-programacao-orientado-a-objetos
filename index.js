class Pessoa {
    #nome;
    static pessoas = 0;
    constructor(nome) {
        this.#nome = nome;
        Pessoa.pessoas++;
    }

    static pessoaModeu(valor) {
        if (valor) {
            Pessoa.pessoas -= valor;
        }
    }

    androu() {
        console.log(`O ${this.#nome} andou`);
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }
}
const ariel = new Pessoa('Ariel');
const pedro = new Pessoa('Pedro');
console.log(ariel);
new Pessoa('Pedro');
new Pessoa('Pedro');
new Pessoa('Pedro');
new Pessoa('Pedro');
new Pessoa('Pedro');

Pessoa.pessoaModeu(3);

new Pessoa('Pedro');
new Pessoa('Pedro');
new Pessoa('Pedro');
new Pessoa('Pedro');

Pessoa.pessoaModeu(1);
console.log(Pessoa.pessoas);

