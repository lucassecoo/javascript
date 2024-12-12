// let cpf = '121.124.149-17'
// let cpfLimpo = cpf.replace(/\D+/g, '')
// cpfArray = Array.from(cpfLimpo)
// console.log(cpfArray.reduce((ac, val)=> ac + Number(val), 0))soma dos elementos da array

function LerCpf(cpf){
    this.cpf = cpf
}

LerCpf.prototype.cpfLimpo = function(){
    let cpfLimpo = this.cpf.replace(/\D+/g, '')
    return cpfLimpo
}

LerCpf.prototype.cpfArray = function(){
    let cpfArray = Array.from(this.cpfLimpo())
    return cpfArray
}

LerCpf.prototype.cpfSoma = function(){
    return this.cpfArray().reduce((ac, val)=> ac + Number(val), 0)
}

LerCpf.prototype.validaCpf = function(){
    let cont = 10
    let cpfArrayNew = this.cpfArray().slice(0, -2)
    for(let i = 0; i < cpfArrayNew.length; i++){
        cpfArrayNew[i] = cpfArrayNew[i] * cont
        cont-- 
    }
    let soma = cpfArrayNew.reduce((ac, val)=> ac + Number(val), 0)
    let lastNum1
    if(11 - (soma % 11) > 9){
        lastNum1 = 0
    } else {
        lastNum1 = 11 - (soma % 11)
    }

    //segundo digito
    let cont2 = 11
    let cpfArrayNew2 = this.cpfArray().slice(0, -2)
    cpfArrayNew2.push(lastNum1)
    for(let j = 0; j < cpfArrayNew2.length; j++){
        cpfArrayNew2[j] = Number(cpfArrayNew2[j])* cont2
        cont2-- 
    }
    let soma2 = cpfArrayNew2.reduce((ac, val)=> ac + Number(val), 0)
    let lastNum2
    if(11 - (soma2 % 11) > 9){
        lastNum2 = 0
    } else {
        lastNum2 = 11 - (soma2 % 11)
    }

    let cpfFinal = this.cpfArray().slice(0, -2)
    cpfFinal.push(lastNum1.toString())
    cpfFinal.push(lastNum2.toString())


    
    //FAZ A VERIFICAÇÃO
    if(this.cpfArray().join('') == cpfFinal.join('')){
        return 'Verdadeiro'
    } else{
        return 'false'
    }
    
}

const cpf = new LerCpf('705.484.450-52')
console.log(cpf.validaCpf())