// The prototype object
let personPrototype = {
    sayHello: function() {
      return "Hello, my name is " + this.name;
    },
    setName: function(name) {
      this.name = name;
    },
    getName: function() {
      return this.name;
    },
    setAge: function(age) {
      this.age = age;
    },
    getAge: function() {
      return this.age;
    },
    setGender: function(gender) {
      this.gender = gender;
    },
    getGender: function() {
      return this.gender;
    }
  };
  
  // The object factory
  function createPerson(name, age, gender) {
    let person = Object.create(personPrototype);
    person.setName(name);
    person.setAge(age);
    person.setGender(gender);
    return person;
  }
  
  // Usage
  let person1 = createPerson("John", 30, "male");
  let person2 = createPerson("Jane", 25, "female");
  
  console.log(person1.sayHello()); // "Hello, my name is John"
  console.log(person2.sayHello()); // "Hello, my name is Jane"
  console.log("Age: " + person1.getAge() + " Gender: " + person1.getGender()); // "Age: 30 Gender: male"
  console.log("Age: " + person2.getAge() + " Gender: " + person2.getGender()); // "Age: 25 Gender: female"