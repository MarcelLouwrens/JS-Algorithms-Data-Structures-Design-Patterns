class Computer {
    constructor() {
      this.cpu = null;
      this.ram = null;
      this.storage = null;
      this.graphics = null;
      this.monitor = null;
      this.os = null;
    }
  }
  
  class ComputerBuilder {
    constructor() {
      this.computer = new Computer();
    }
  
    setCpu(cpu) {
      this.computer.cpu = cpu;
      return this;
    }
  
    setRam(ram) {
      this.computer.ram = ram;
      return this;
    }
  
    setStorage(storage) {
      this.computer.storage = storage;
      return this;
    }
  
    setGraphics(graphics) {
      this.computer.graphics = graphics;
      return this;
    }
  
    setMonitor(monitor) {
      this.computer.monitor = monitor;
      return this;
    }
    
    setOs(os) {
      this.computer.os = os;
      return this;
    }
  
    addMonitor(monitor){
      this.computer.monitor.push(monitor);
      return this;
    }
  
    addRam(ram){
      this.computer.ram.push(ram);
      return this;
    }
  
    build() {
      return this.computer;
    }
  }
  
  // Usage
  const computerBuilder = new ComputerBuilder();
  const computer = computerBuilder
    .setCpu("i9")
    .setRam(["16GB","32GB"])
    .setStorage("1TB SSD")
    .setGraphics("RTX 3080")
    .setMonitor("34 inches")
    .setOs("Windows")
    .build();
  console.log(computer);