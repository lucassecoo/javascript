function testar(){
    let inicio = document.getElementById('vinicio')
    let fim = document.getElementById('vfim')
    let passo = document.getElementById('vpasso')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i > f) {
            res.innerHTML = `Não é possivel`
        }
        if (i < f){
        for(c = i; c <= f;  c += p){
        res.innerHTML += `${c} 👉 `
        }
        } else{
            for (c = i; c>= f; c -= p){
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += `🏁`
    } 
}