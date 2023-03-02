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

// const pessoa = new Pessoa('ariel', 29);
// console.log(pessoa.__proto__);
// console.log(Pessoa.prototype);

function Funcionario(cargo) {
    this.cargo = cargo;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.baterPonto = function () {
    console.log("bateu o ponto");
}
// const funcionario = new Funcionario('dev');
// console.log(funcionario.__proto__.__proto__);
// console.log(Funcionario.prototype);

function Engenheiro(crea) {
    this.crea = crea;
}
Engenheiro.prototype = Object.create(Funcionario.prototype);
Engenheiro.prototype.constructor = Engenheiro;


// const engenheiro = new Engenheiro(123123);
// console.log(engenheiro.__proto__.__proto__);
// console.log(Engenheiro.prototype);


const engenheiro = new Engenheiro(123123);


console.log(engenheiro.__proto__.__proto__.__proto__);