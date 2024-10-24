function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        //Getter pega o valor que já foi definido na função
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}` //usamos this para se referir ao objeto do get / set
        },
        //setter pega o valor definido no argumenyo, mesmo que coloque um valor dentro da função e dps atualizar ele nor args vai ser valido dos args
        set nomeCompleto(valor){
            valor = valor.split('')
            this.nome = valor.shift()
            this.sobrenome = valor.join('')
        },

        fala(assunto){
            return`${this.nome} está ${assunto}`
        },

        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('lucas', 'alves', 1.70, 65)
console.log(p1.fala('blabla'))
console.log(p1.imc)