class Vehicle {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "white";
    }
}

class Car extends Vehicle {
    constructor(options) {
        super(options);
        this.wheels = 4;
    }
}

class Truck extends Vehicle {
    constructor(options) {
        super(options);
        this.wheels = 6;
    }
}

class Motorcycle extends Vehicle {
    constructor(options) {
        super(options);
        this.wheels = 2;
    }
}

// Factory function
function vehicleFactory(type, options) {
    switch (type) {
        case "car":
            return new Car(options);
        case "truck":
            return new Truck(options);
        case "motorcycle":
            return new Motorcycle(options);
        default:
            throw new Error("Invalid vehicle type.");
    }
}

const car = vehicleFactory("car", {
    doors: 4,
    state: "used",
    color: "red"
});

const truck = vehicleFactory("truck", {
    doors: 2,
    state: "used",
    color: "blue"
});

const motorcycle = vehicleFactory("motorcycle", {
    state: "brand new",
    color: "black"
});

console.log(car); // Car { doors: 4, state: 'used', color: 'red', wheels: 4 }
console.log(truck); // Truck { doors: 2, state: 'used', color: 'blue', wheels: 6 }
console.log(motorcycle); // Motorcycle { doors: undefined, state: 'brand new', color: 'black', wheels: 2 }