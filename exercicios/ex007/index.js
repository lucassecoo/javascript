function contadorDeFrequencia(p){
    let str = p
    let letras = str.split('')
    let comprimento = letras.length
    for(let i=0; i < comprimento; i++){
        for(let j=0; j < comprimento; j++){
            if(letras[i] === letras[j]){
                console.log(`A letra ${letras[j]} se repete`)
            }
        }
    }
}

contadorDeFrequencia('lucas')