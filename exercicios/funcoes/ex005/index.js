// function maiorNum(x, y, z){
//     let maior = 0
//     let numeros = [x, y, z]
//     for(i of numeros){
//         if(numeros[i] > maior){
//             maior = numeros[i]
//         }
//     }
//     console.log(maior)
// }

// maiorNum(1, 2, 3)

function vogais(valor){
    let separado = valor.split('')
    let vogal = 0
    for(i = 0; i <= separado.length; i++){
        if(separado[i] === 'a' || separado[i] === 'e' || separado[i] === 'i' || separado[i] === 'o' || separado[i] === 'u') vogal += 1
    }
    console.log(Number(vogal))
}

vogais('lucas')