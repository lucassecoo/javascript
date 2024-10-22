let pessoas = {
    nome: 'Lucas',
    idade: 0,
    cidade: ''
}

function mudarIdade(valor){
    pessoas.idade = valor
}   

function mudarCidade(valor){
    pessoas.cidade = valor
}

for(i in pessoas){
    console.log(pessoas[i])
}
