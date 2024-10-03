function testar(){
    let num = document.getElementById('vnum')
    let res = document.getElementById('resultado')
    res.innerHTML = ''
    for (c = 1; c <= 10; c++){
        let n = Number(num.value)
        let mult = n * c
        res.innerHTML += `${n} X ${c} = ${mult} <br>`
    }
}