function contagemRegressiva(x){
    if(x < 0){
        return
    } else{
        console.log(x)
        contagemRegressiva(x-1)
    }
}

contagemRegressiva(10)