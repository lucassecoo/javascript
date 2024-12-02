function aluno(nome, n1, n2){
    this.nome = nome
    this.n1 = n1
    this.n2 = n2

    this.media = () => `a média é: ${(n1 + n2)/2}`

}

const aluno1 = new aluno('lucas', 10, 2)
console.log(aluno1.media())