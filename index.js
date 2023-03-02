function Pessoa(nome) {

    if (!new.target) {
        throw "o objeto Pessoa deve ser instânciado"
    }

    this.nome = nome;
    console.log(this);
    console.log(new.target);
}

new Pessoa();

