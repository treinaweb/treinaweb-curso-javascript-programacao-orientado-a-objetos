function Pessoa(nome) {
    this.nome = nome;

    Pessoa.prototype.valor = this;
}

Pessoa.prototype.falar = function () {
    console.log(this);
}

const pessoa = new Pessoa("ariel");

console.log(pessoa.valor);

// pessoa.falar();