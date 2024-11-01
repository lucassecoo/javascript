function pessoa(nome, idade){
    this.name = nome
    this.old = idade

    this.msg = function(){
        return `ola, ${this.name}, sua idade é ${this.old}`
    }
}

const p1 = new pessoa('lucas', 19)

console.log(p1.msg())

