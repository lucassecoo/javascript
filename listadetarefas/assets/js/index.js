let tarefa = document.getElementById('texto')
let res = document.querySelector('ul#res')
let linha = document.querySelector('p#linha')

tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) adicionar()
})

function adicionar (){
    if(tarefa.value === '') return
    const li = document.createElement('li')
    li.innerText = tarefa.value
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.addEventListener('click', function(){
        res.removeChild(li)
    })
    botao.style.float = 'right'
    const linha = document.createElement('hr')
    res.appendChild(li)
    li.appendChild(botao)
    tarefa.value = ''
}

// function adicionar(){
//     if(tarefa.value === '') return
//     const botaoApagar = document.createElement('button')
//     botaoApagar.innerText = 'apagar'
//     const botao = res.appendChild(botaoApagar)
//     res.innerHTML += `<li>${tarefa.value}  ${botao}</li>`
//     tarefa.value = ''
// }