function fizzBuzzAvancado(x){
    if (0 < x && x < 100){
        if(x % 3 === 0 && x % 5 === 0){
            return 'FizzBuzz'
        } else if(x % 3 === 0){
            return 'Fizz'
        } else if(x % 5 === 0){
            return 'Buzz'
        } else{
            return x
        }
    } else{
        return 'numero invalido'
    }
    
}

console.log(fizzBuzzAvancado(10000))