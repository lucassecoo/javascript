let vel = document.querySelector('input#ivel')
let resultado = document.querySelector('div#resultado')
function teste (){
    if (vel.value >= 60){
        resultado.innerHTML = "voce ultrapassou o limite"
    } else{
        resultado.innerHTML = "você está no limite"
    }
}