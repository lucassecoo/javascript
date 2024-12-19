class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar(){
        return `${this.nome} esta andando`
    }
}

const p1 = new Pessoa('lucas', 'alves')
console.log(p1.falar())


class Eletronicos{
    constructor(nome){
        this.nome = nome,
        this.ligado = true
    }

    ligar(){
        if(this.ligado){
            return "já está ligado"
        } else {
            this.ligado = true
        }
    }

    desligar(){
        if(!this.ligado){
            return 'ja esta desligado'
        } else{
            this.ligado = false
        }
    }
}

class Smartphone extends Eletronicos{
    constructor(nome, cor, modelo){
        super(nome),
        this.cor = cor,
        this.modelo = modelo
    }
}