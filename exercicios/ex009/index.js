function Device(brand, model){
    this.brand = brand,
    this.model = model
}

Device.prototype.getInfo = function(){
    return `The brand is ${this.brand} and the model is ${this.model}`
}

function Laptop(brand, model, screenSize){
    Device.call(this, brand, model)
    this.screenSize = screenSize
}

Laptop.prototype = Object.create(Device.prototype)
Laptop.prototype.constructor = Laptop

Laptop.prototype.getLaptopInfo = function(){
    return `${this.getInfo()}, the screen size it's ${this.screenSize}`
}
const Lap1 = new Laptop('Apple', 'ipad 8', 15.3)
console.log(Lap1.getLaptopInfo())

function Smartphone(brand, model, batteryLife){
    Device.call(this, brand, model),
    this.batteryLife = batteryLife
}

Smartphone.prototype = Object.create(Device.prototype)
Smartphone.prototype.constructor = Smartphone

Smartphone.prototype.getSmartphoneInfo = function(){
    return `${this.getInfo()} and the battery life is ${this.batteryLife}`
}
const tel1 = new Smartphone('Samsung', 'S24', 18)
console.log(tel1.getSmartphoneInfo())