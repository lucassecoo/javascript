// let numeros = [1, 2, 3, 4, 5]
// let soma = numeros.reduce((acumulador, proxNum) => acumulador + proxNum, 0)
// console.log(soma)

// let numeros = [1, 2, 3]
// let dobro = numeros.map(valor => valor * 2)
// console .log(dobro)

// let num = [1, 2, 3, 4, 5, 6]
// let pares = num.filter(valor => valor % 2 === 0)
// console.log(pares)

const produtos = [
    { nome: 'Teclado', preco: 100, categoria: 'Eletrônicos' },
    { nome: 'Monitor', preco: 700, categoria: 'Eletrônicos' },
    { nome: 'Cadeira', preco: 300, categoria: 'Móveis' },
    { nome: 'Mesa', preco: 500, categoria: 'Móveis' },
];

// let produtosPorCategoria = produtos.reduce((agrupado, produto) => {
//     // Verifica se a categoria já existe no objeto
//     if (!agrupado[produto.categoria]) {
//         agrupado[produto.categoria] = []; // Cria o array para a categoria, se necessário
//     }
//     agrupado[produto.categoria].push(produto); // Adiciona o produto à categoria
//     return agrupado;
// }, {});

// console.log(produtosPorCategoria);

function valor(preco, qtd){
    console.log(`O valor a ser pago por pessoa é ${preco/qtd}`)
}

valor(30, 3 )