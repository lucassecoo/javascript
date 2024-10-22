let tarefa = document.getElementById('texto')
let res = document.querySelector('ul#res')
let linha = document.querySelector('p#linha')

tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) adicionar()
})

function adicionar (){
    if(tarefa.value === '') return
    const li = document.createElement('p')
    li.innerText = tarefa.value
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.addEventListener('click', function(){
        res.removeChild(li)
    })
    botao.style.float = 'right'
    res.appendChild(li)
    li.appendChild(botao)
    tarefa.value = ''
    li.style.borderBottom = '1px solid black'
    li.style.padding = '7px'
    botao.style.backgroundColor = 'red'
    botao.style.color = 'white'
    botao.style.padding = '3px'
    botao.style.marginBottom = '10px'
}
