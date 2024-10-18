let res = document.getElementById('res')
let segundo = 0
let minuto = 0
let hora = 0
let intervalo


function atualizar(){
    segundo++
    if(segundo > 60){
        segundo = 0
        minuto++
    }
    if(minuto > 60){
        minuto = 0
        hora++
    }
    const formatar = (num) => (num <10 ? `0${num}` : num)
    res.innerText = `${formatar(hora)}:${formatar(minuto)}:${formatar(segundo)}`
}

function tempo(){
    intervalo = setInterval(atualizar,1000);
    res.style.color = 'black'
}

function pausar(){
    clearInterval(intervalo) 
    res.style.color = 'red'
}

function reiniciar(){
    clearInterval(intervalo) 
    segundo = 0
    minuto = 0
    hora = 0
    res.style.color = 'black'
    res.innerText = '00:00:00'
}