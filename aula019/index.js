//se alterado a array de a, b tb sera alterado
const a = {
    nome: 'luiz',
    sobrenome: 'alberto'
}

const b = a;

//para não alterar faça assim
const c = [...a];