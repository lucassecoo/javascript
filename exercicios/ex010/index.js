function Conta(ag, conta, saldo){
    this.ag = ag,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.verSaldo = function(){
    return this.saldo
}

Conta.prototype.deposito = function(valor){
    this.saldo = this.saldo + valor
    return `Você depositou ${valor}`
}

Conta.prototype.saque = function(valor){
    this.saldo = this.saldo - valor
    return `Você sacou ${valor}`
}

const cc = new Conta(27, 12345-6, 500)
console.log(cc.deposito(100))
console.log(cc.verSaldo())

function CC(ag, conta, saldo, limite){
    Conta.call(this, ag, conta, saldo),
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC