class CarDefault {
    label: string = 'Generic CarDefault'
    numWheels: Number = 4
    horn() {
        return "beep beep!"
    }
}

class Truck extends CarDefault {
    label = 'Truck'
    numWheels = 18
}

class Tesla extends CarDefault {
    label = 'Tesla'
    numWheels = 2
}

function washCarDefault <T extends CarDefault> (car: T) : T {
    console.log(`Label: ${car.label}`)
    console.log(`Wheels: ${car.numWheels}`)
    console.log(car.horn())
    return car
}

const myTesla = new Tesla()
washCarDefault<Tesla>(myTesla)

const myTruck = new Truck()
washCarDefault<Truck>(myTruck)

const teste = new CarDefault()
washCarDefault<CarDefault>(teste)


