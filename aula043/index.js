function f1(callback){
    console.log('f1')
    if (callback) callback()
}

function f2(callback){
    console.log('f2')
    if (callback) callback()
}

function f3(callback){
    console.log('f3')
    if (callback) callback()
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Terminou a sequência!');
}

//---------------------------------------
function exibir(num){
    console.log(num)
}

function soma(x, y, callback){
    const op = x + y
    callback(op)
}

function mult(x, y, cb){ //da pra chamar o callback de cb
    const ope = x * y
    cb(ope)//passa o valor que deseja enviar pro callback
}

soma(5, 5, exibir)

