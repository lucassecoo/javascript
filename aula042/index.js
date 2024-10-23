function multiplicador(mult){
    return function(n){
        return n * mult
    }
}

//define o mult
const duplica = multiplicador(2)
const triplica = multiplicador(3)
const quadriplica = multiplicador(4)

//define n
console.log(duplica(5))
console.log(triplica(6))
console.log(quadriplica(7))