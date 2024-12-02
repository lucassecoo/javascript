function produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque= estoque

    this.comprar = (qtd) =>{
        estoque -= qtd
        return `estoque = ${estoque}`
    }

    this.adicionar = (qtd) => {
        estoque += qtd
        return `estoque = ${estoque}`
    }
}

const compras = new produto('bla', 14, 20)
console.log(compras.comprar(1))
console.log(compras.adicionar(5))