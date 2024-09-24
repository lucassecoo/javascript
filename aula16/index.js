//                 1        2        3  
const alunos = ['Lucas', 'Joao' , 'Maria'];

//adicionar um elemento no final da array
alunos.push('Julia');

//adicionar um elemento no começo da array
alunos.unshift('Julia');

//substituir algum elemento
alunos[2] = 'Pedro';
console.log(alunos);

//remover o primeiro elemento
alunos.shift();

//remover o ultimo elemento
alunos.pop();

//para salvar o elemento removido em uma const
const removido = alunos.pop();

//separar os elementos de acordo com sua ordem
alunos.slice(0,3);