const frutas = [ 'pera', 'uva', 'maça']

for (i in frutas){
    console.log(frutas[i])
}

const pessoas = {
    nome: 'lucas',
    sobrenome: 'alves',
    idade: 19
}

for (i in pessoas){
    console.log(i, pessoas[i])
}

for (valor of frutas){
    console.log(valor)
}