function calculadora (x, y, a){
    try{
    if(a === '+'){
        return x + y
    } else if(a === '-'){
        return x - y
    }else if(a === '*'){
        return x * y
    }else if(a === '/'){
        return x / y
    } else{
        throw new Error()
    }
    } catch(Error){
    console.log('deu erro')
    }
}

console.log(calculadora(10, 5, ''))