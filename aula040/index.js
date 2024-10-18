function Hora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false
    })
}

const timer = setInterval(function(){
    console.log(Hora())
}, 1000) //REPETE A FUNÇÃO EM MILISEGUNDOS (AQUELE 1000)

const paraTimer = setTimeout(function(){
    clearInterval(timer)
}, 5000) //PARA A FUNÇÃO EM MILISEGUNDOS (AQUELE 3000)

