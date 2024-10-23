function gerarErro(x){
    try{
        if(x > 0){
            console.log(x)
        } else {
            throw new Error('Número negativo não permitido')
        }
    } catch(e){
        console.log(e.message)
    }
}

gerarErro(-10)