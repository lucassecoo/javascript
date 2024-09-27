function verificar(){
    let date = new Date()
    let ano = date.getFullYear()
    let tano = document.getElementById('vidade')
    let res = document.getElementById('resultado')
    let img = document.getElementById('foto')
    if (Number(tano.value) > ano || tano.value.length == 0){
        window.alert('Ano invalido!')
    } else{
        let fsex = document.getElementsByName('radsex')
        let genero = ''
        let idade = ano - Number(tano.value)
        if (fsex[0].checked){
            genero = 'homem'
            if (idade <= 10){  
                img.src = 'imagens/bebe h.jpg'
            }
            else if (idade <= 21){
                img.src = 'imagens/jovem h.jpg'
            }
            else if(idade <=50){
                img.src = 'imagens/adulto h.jpg'
            }
            else{
                img.src = 'imagens/idoso h.jpg'
            }
                
        } else {
            genero = 'mulher'
            if (idade <= 10){
                img.src = 'imagens/bebe m.jpg'
            }
            else if (idade <= 21){
                img.src = 'imagens/jovem m.jpg'
            }
            else if(idade <=50){
                img.src = 'imagens/adulta m.jpg'
            }
            else{
                img.src = 'imagens/idosa m.jpg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
    }
    
}