function Pessoa(nome, sexo, idade, rg) {
    this.nome = nome;

    Object.defineProperty(this, 'sexo', {
        enumerable: true,
        // value: sexo,
        // writable: true,
        get: function () {
            return sexo;
        },
        set: function (value) {
            sexo = value;
        },
        configurable: false,
    });

    Object.defineProperties(this, {
        idade: {
            enumerable: true,
            // value: idade,
            // writable: true,
            configurable: false,
            get: () => idade,
            set: function (value) {
                idade = value;
            }
        },
        rg: {
            enumerable: true,
            value: rg
        }
    })

}


const pessoa = new Pessoa('ariel', 'M', 29, 123123);
pessoa.sexo = "F";
console.log(pessoa.idade);

