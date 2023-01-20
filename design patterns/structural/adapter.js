class OldCalculator {
    operate(a, b, operation) {
      switch (operation) {
        case "add":
          return a + b;
        case "subtract":
          return a - b;
        default:
          return NaN;
      }
    }
  }
  
  class NewCalculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
  }
  
  class CalculatorAdapter {
    constructor() {
      this.newCalc = new NewCalculator();
    }
  
    operate(a, b, operation) {
      switch (operation) {
        case "add":
          return this.newCalc.add(a, b);
        case "subtract":
          return this.newCalc.subtract(a, b);
        default:
          return NaN;
      }
    }
  }
  
  const oldCalc = new OldCalculator();
  console.log(oldCalc.operate(5, 2, "add")); // 7
  console.log(oldCalc.operate(5, 2, "subtract")); // 3
  
  const newCalc = new CalculatorAdapter();
  console.log(newCalc.operate(5, 2, "add")); // 7
  console.log(newCalc.operate(5, 2, "subtract")); // 3