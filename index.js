// const ariel = {
//     nome: "ariel",
//     idade: 29,
//     andar: function () { }
// }

// const elton = {
//     nome: "elton",
//     idade: 36,
//     endereco: '',
//     andar: function () { }
// }

function Pessoa(nome, idade, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;

    this.andar = function () { }
}

const elton = new Pessoa("elton", 36, "ruax");

const ariel = new Pessoa("ariel", 29, "rua y");

console.log(elton);