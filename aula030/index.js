let num = document.getElementById('vnum')
let res = document.getElementById('resultado')
let numeros = []
let conta = document.querySelector('div#conta')

function adicionar (){
    if ( num.value < 0 || num.value > 100) {
        window.alert('Valores fora do padrão!')
    } else if(num.value.length == 0){
        window.alert('adicione algum valor!')
    } else {
        numeros.push(Number(num.value))
        res.innerHTML += `O valor ${num.value} foi adicionado <br>`
    }
    num.value = ""
}




function validar (){
    let soma = 0
    for(i=0; i < numeros.length; i++){
        soma += numeros[i]
    }
    let media = soma / numeros.length
    conta.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados <br> O maior valor informado é ${Math.max(...numeros)} <br> O menor valor é ${Math.min(...numeros)} <br> Somando todos os valores temos ${soma} <br> A média desses numeros é ${media}`
}