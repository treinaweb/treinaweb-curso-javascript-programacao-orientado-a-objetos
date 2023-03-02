function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.nascer = function () {
    console.log(`A pessa ${this.nome} nasceu`);
}
Pessoa.prototype.morrer = function () {
    console.log(`A pessa ${this.nome} morreu`);
}

function Funcionario(nome, idade, cargo) {
    Pessoa.call(this, nome, idade);
    this.cargo = cargo;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.baterPonto = function () {
    console.log("bateu o ponto");
}

function Engenheiro(nome, idade, cargo, crea) {
    Funcionario.call(this, nome, idade, cargo);
    this.crea = crea;
}
Engenheiro.prototype = Object.create(Funcionario.prototype);
Engenheiro.prototype.constructor = Engenheiro;



const engenheiro = new Engenheiro("ariel", 29, "dev", 123123);


console.log(engenheiro);

engenheiro.nascer();