//function maiorMenor (){
//    for(i=0; i<2; i++){
//        const num = Math.random[]
//   }
//}

function maiorMenor (){
    const num1 = Math.round(Math.random()*10)
    const num2 = Math.round(Math.random()*10)
    const teste = [num1, num2]
    console.log(`Maior: ${Math.max(...teste)}, menor: ${Math.min(...teste)}`)
}

maiorMenor()