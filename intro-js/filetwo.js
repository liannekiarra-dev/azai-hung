function greet(name){
    console.log('Hello there', name);}

greet('John Doe');
//object oriented programming

class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start(){
        console.log('The car is starting........');console.log('The car is ,' ,this.brand, this.model, this.year )
    }
}

let myCar = new Car('Toyota', 'Corolla', 2015);
myCar.start()

class ElectricCar extends Car{
    constructor(brand,model, year, batteryCapacity){
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    newcharge(){
        console.log('The car is charging........')
    }
}


function charge(){
    console.log('The car is charging........');
};
