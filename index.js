"use strict"

var idade = 25

function Pessoa(nome) {


    this.nome = nome;
    console.log(this instanceof Pessoa);
}

new Pessoa();