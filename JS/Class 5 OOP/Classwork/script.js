class Car{
    constructor(brand) {
        this.brand = brand;
    }
    startEngine(){
        console.log(`Start shit ${this.brand}`);
    }
}

const car = new Car("lala");
car.startEngine();
console.log(car);