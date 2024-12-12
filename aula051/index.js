// const objA = {
//     chaveA: 'A'
// }

// const objB = {
//     chaveB: 'b'
// }

// Object.setPrototypeOf(objB, objA)
// console.log(objB.chaveA)

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(porcento){
    this.preco = this.preco - (this.preco * (porcento / 100))
}

const p1 = new Produto('caneca', 10)
p1.desconto(10)
console.log(p1)

const p2 = {
    nome: 'chave',
    preco: 100
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(10)
console.log(p2)

const p3 = Object.create(Produto.prototype)
p3.preco = 50
p3.desconto(10)
console.log(p3)