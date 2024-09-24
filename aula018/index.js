function criaPessoa(nome, sobrenome, idade){
    return{
        nome, sobrenome, idade
    };
}

let pessoa1 = criaPessoa('Lucas', 'Alves', 19);
const pessoa2 = criaPessoa('humberto', 'miranda', 20);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);

const pessoa3 = {
    nome: 'lucas',
    sobrenome: 'jose',

    fala () {
        console.log(`meu nome é: ${this.nome} ${this.sobrenome}`)
    }
}

pessoa3.fala();