function saudacao(nome){
    console.log(`ola ${nome}`);
}

saudacao('lucas');

//usando return
function oi(nom){
    return`Ola ${nom}`;
}

console.log(oi('lucas'));

//com numeros
function soma(x, y){
    return x + y;
}

console.log(soma(5, 15));

//quando tem apenas uma var da pra fazer assim
const raiz = n => n ** 0.5;