function* geradora1(){
    //qualquer codigo
    yield 1
    //qualquer codigo
    yield 2 
    //qualquer codigo
    yield 3
    //qualquer codigo
    yield 4 
}

console.log(geradora1().next().value) //chama a primeira vez (res 1)
console.log(geradora1().next().value) //chama a segunda vez (res 2)

//geradora chama outra geradora
function* geradora2(){
    yield* geradora1()
    yield 5
    yield 6
}

const g2 = geradora2()
for(let valor of g2){
    console.log(valor)
}