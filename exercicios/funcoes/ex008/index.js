function carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano

    this.getInfo = () => {
        return `marca: ${marca}, modelo: ${modelo}, ano: ${ano}`
    }
}

const carro1 = new carro('ford', 'ka', 2015)
console.log(carro1.getInfo())