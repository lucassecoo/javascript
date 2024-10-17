const altura = Number(window.prompt('Digite a altura'))
const largura = Number(window.prompt('Digite a largura'))
const res = document.getElementById('res')

function teste(){
    if (altura > largura){
        res.innerHTML = 'Orientação retrato'
    } else {
        res.innerText = 'orientação paisagem'
    }
}

teste()