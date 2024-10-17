// function teste (){
//     try{
//         comando
//     } catch (error){
//         console.log('deu erro') //se der erro vem pra essa função
//     } finally{
//         console.log('msg final') //sempre vai mostrar
//     }
// }

// teste()

// function dividirNumeros(x,y){
//     try{
//         if(y===0){
//             throw new Error('Erro: Não é possível dividir por zero');
//         }
//         console.log(`Resultado da divisão = ${x/y}`)
//         if(typeof x === 'string' || typeof y == 'string'){
//             throw new Error('Erro: Não é possível dividir por letras')
//         }
//     } catch(erro){
//         console.log(erro.message)
//     }finally{
//         console.log('Operação concluída')
//     }
// }

// dividirNumeros(10,'a')

function verificadorIdade(x){
    try{
        if(typeof x !== 'number' || x === null){
            throw new Error('Erro: Idade inválida. Por favor, insira um número.')
        }
        if(x <= 18){
            throw new Error('Erro: Acesso negado. Você precisa ter 18 anos ou mais.')
        }
        console.log('Acesso permitido. Bem-vindo!')
    } catch(error){
        console.log(error.message)
    } finally{
        console.log('Verificação de idade concluída.')
    }
}

verificadorIdade('dez')