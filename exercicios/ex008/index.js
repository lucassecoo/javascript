function Vehicle(brand, year){
    this.brand = brand,
    this.year = year
}

Vehicle.prototype.getDetails = function(){
    return `The brand is ${this.brand} and the year is ${this.year}`
}

function Car(brand, year, doors){
    Vehicle.call(this, brand, year)
    this.doors = doors
}
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.getCarDetails = function(){
    return `${this.getDetails()}, the car have ${this.doors}`
}

const car1 = new Car("Ford", 2024, 4)
console.log(car1.getCarDetails())

function Motocycle(brand, year, hasSidecar){
    Vehicle.call(this, brand, year)
    this.hasSidecar = hasSidecar
}

Motocycle.prototype = Object.create(Vehicle.prototype)
Motocycle.prototype.constructor = Motocycle

Motocycle.prototype.getMotorcycleDetail = function(){
    let sideCar = this.hasSidecar ? 'Sim' : 'Nao'
    return `${this.getDetails()} and hasSidecar = ${sideCar}`
}

const Moto1 = new Motocycle('Harley', 2020, true)
console.log(Moto1.getMotorcycleDetail())