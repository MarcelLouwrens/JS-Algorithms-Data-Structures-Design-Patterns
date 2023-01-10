class MilkshakeFactory {
    createMilkshake(type) {
        let milkshake;
        if (type === "chocolate") {
            milkshake = new ChocolateMilkshake();
        } else if (type === "vanilla") {
            milkshake = new VanillaMilkshake();
        }
        milkshake.type = type;
        milkshake.taste = function() {
            return `Tasting ${this.type}`;
        };
        milkshake.show = function() {
            return `This is a ${this.name}`;
        };
        return milkshake;
    }
}

class ChocolateMilkshake {
    constructor() {
        this.name = "Chocolate Milshake";
    }
}

class VanillaMilkshake {
    constructor() {
        this.name = "Vanilla Milshake";
    }
}

const factory = new MilkshakeFactory();
const chocolateMilkshake = factory.createMilkshake("chocolate");
console.log(chocolateMilkshake.taste()); // Output: "Tasting chocolate"
console.log(chocolateMilkshake.show()); // Output: "This is a Chocolate Milshake"
const vanillaMilkshake = factory.createMilkshake("vanilla");
console.log(vanillaMilkshake.taste()); // Output: "Tasting vanilla"
console.log(vanillaMilkshake.show()); // Output: "This is a Vanilla Milshake"