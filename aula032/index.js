//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const [primeiroNum, segundoNum, ...resto] = numeros  
//const [um, , tres, , cinco] = numeros  
//                  0        1        2
//                0 1 2    0 1 2    0 1 2  
const numeros = [[1,2,3], [4,5,6], [7,8,9]]
const [lista1, lista2, lista3] = numeros
//console.log(lista1[2])

//objetos
const pessoa = {
    nome: 'luis',
    sobrenome: 'fernando',
    idade:30,
    endereço:{
        rua: 'av brasil',
        numero: 321
    }
}

//atribuição via desestruturação
const {endereço: {rua, numero}} = pessoa
console.log(rua, numero)