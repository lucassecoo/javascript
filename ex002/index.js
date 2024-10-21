function solution(number){
    let soma =0 
    if(number < 0){
        return '0'
    } else{
        for(let i=0; i < number; i++){
            if(i % 3 == 0 || i % 5 == 0){
                soma += i
            } 
        }
        return soma
    }
}

console.log(solution(10))