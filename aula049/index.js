// const nomes = ['lucas', 'julia', 'thiago', 'nelson', 'silvana']

// let removidos = nomes.splice(2, 0, 'luiz')
// console.log(removidos)

// const a1 =[1,2,3]
// const a2 = [4, 5, 6]
// const a3 = [...a1, ...a2]
// console.log(a3)

// const numeros = [1, 10, 63, 8, 12, 9 , 7, 21, 45, 5, 4, 2 ,6, 58]
// let filtrados = numeros.filter(valor => valor > 10)
// console.log(filtrados)

// const pessoas = [
//     {nome: 'luiz', idade: 30},
//     {nome: 'alessandra', idade: 23},
//     {nome: 'carlos', idade: 59},
//     {nome: 'rosana', idade: 9},
//     {nome: 'wallace', idade: 18},
// ]

// let velha = pessoas.filter(valor => valor.idade >= 50)
// console.log(velha)

// const soNome = pessoas.map(valor => valor.nome)
// console.log(soNome)

// const numeros = [1, 10, 63, 8, 12, 9 , 7, 21, 45, 5, 4, 2 ,6, 58]
// let filtrados = numeros.filter(valor => valor % 2 === 0)
// console.log(filtrados)



// const pessoas = [
//     {nome: 'luiz', idade: 30},
//     {nome: 'alessandra', idade: 23},
//     {nome: 'carlos', idade: 59},
//     {nome: 'rosana', idade: 9},
//     {nome: 'wallace', idade: 18},
// ]

// const somaIdade = pessoas.reduce((acumulador, proxvalor) => acumulador + proxvalor.idade, 0)
// console.log(somaIdade)

const numeros = [1, 10, 63, 8, 12, 9 , 7, 21, 45, 5, 4, 2 ,6, 58]

let pares = numeros.filter(valor => valor % 2 === 0)
let dobrados = pares.map(valor => valor * 2)
let somados = dobrados.reduce((contador, proxValor) => contador + proxValor, 0)

console.log(pares, dobrados, somados)