function banco(titular, saldo){
    this.titular = titular
    this.saldo = saldo

    this.depositar = (valor) => {
        saldo += valor
        return `Depositou: ${saldo}`
    }

    this.sacar = (valor) =>{
        saldo -= valor
        return `Sacou: ${saldo}`
    }

    this.consulta = () => saldo
}

const p1 = new banco('lucas', 100)
console.log(p1.depositar(100))
p1.sacar(100)
console.log(p1.consulta())