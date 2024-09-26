let pais = document.querySelector('input#ipais')
let result = document.querySelector('div#resultado')
function teste(){
    if (pais = 'brasil'){
        result.innerHTML = "você não é estrangeiro"
    } else{
        result.innerHTML = "você é estrangeiro"
    }
}