// const produtos = {nome: 'Porduto', preco: 15}
// const outroProd = Object.assign({}, produtos, {material: 'porcelana'})
// console.log(Object.keys(produtos))

function pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

const p1 = new pessoa('lucas', 'alves')

pessoa.prototype.Nomecompleto = function(){
    return this.nome + this.sobrenome
}
console.log(p1.Nomecompleto())