function somatorio (n){
    let soma = 0
let i = 0
    if(n > 0){
        while(i <= n){
            soma += i
            i++
        }
        console.log(soma)
    } else {
        console.log('numero negativo')
    }

}

somatorio(3)