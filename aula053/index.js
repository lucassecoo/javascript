const myPromises = new Promise((resolve, reject) => {
    const nome = 'lucas'

    if(nome === 'lucas'){
        resolve('O usuario encontrado')
    } else {
        reject('usuario nao encontrado')
    }
})

myPromises.then((data) => {
    console.log(data)
})

const myPromises2 = new Promise((resolve, reject) => {
    const nome = 'lucas'

    if(nome === 'lucas'){
        resolve('O usuario encontrado')
    } else {
        reject('usuario nao encontrado')
    }
})

myPromises2.then((data) => {
    return data.toLowerCase()
}).then((stringModifica) => {
    console.log(stringModifica)
})


const myPromises3 = new Promise((resolve, reject) => {
    const nome = 'joao'

    if(nome === 'lucas'){
        resolve('O usuario encontrado')
    } else {
        reject('usuario nao encontrado')
    }
})

myPromises3.then((data) => {
    return data
}).catch((error) => {
    console.log('Aconteceu um erro' + error)
})

const resolveAll = Promise.all([myPromises, myPromises2, myPromises3]).then((data) => {
    console.log(data)
})