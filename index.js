function Pessoa(nome) {
    if (!(this instanceof Pessoa)) {
        return new Pessoa(nome);
    }


    this.nome = nome;
    console.log(this instanceof Pessoa);
}

Pessoa();