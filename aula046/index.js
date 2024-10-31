function Pessoa(nome, sobrenome){
    //atributos internos
    const ID = 12345
    const metodo = () => //metodo interno

    //atributos publicos
    this.nome = nome
    this.sobrenome = sobrenome


    //metodo publico
    this.metodo = function(){
        console.log(this.nome + ' sou um metodo')
    }
}

const p1 = new Pessoa('lucas', 'alves')
const p2 = new Pessoa('exemplo', 'dois')
p2.metodo()