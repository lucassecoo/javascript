const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

for (i=0; i<=elementos.length; i++){
    let novoElemento = document.createElement(elementos[i].tag)
    novoElemento.textContent += elementos[i].texto
    document.body.appendChild(novoElemento) 
}