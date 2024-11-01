function livro(titulo, autor, ano){
    this.titulo = titulo
    this.autor = autor
    this.ano = ano

    this.detalhes = () => `Autor: ${this.autor}, titulo: ${this.titulo} e ano: ${this.ano}`
}

const livro1 = new livro('blabla', 'lucas', 1450)
console.log(livro1.detalhes())