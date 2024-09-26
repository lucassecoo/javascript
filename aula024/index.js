function carregar(){
let agora = new Date()
let hora = agora.getHours()
let mensagem = document.getElementById('mensagem')
let img = document.getElementById('imagem')
mensagem.innerHTML = `Agora são ${hora}`
    if (hora >=0 && hora < 12){
        document.body.style.backgroundColor = '#D0C092'
    } else if (hora >= 12 && hora <18){
        document.body.style.backgroundColor = '#A97B66'
        img.src = 'imagens/tarde.jpg'
    } else {
        document.body.style.backgroundColor = '#454747'
        img.src = 'imagens/noite.jpg'
    }
}