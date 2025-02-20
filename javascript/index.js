/**
 *   OOPS IN JS
 *  --------------
 *      classes
 *           classes defines creation of object
 *           classes are collections of properties and methods 
 *           properties are state and methods are behviour of an object 
 *           classes are introduced in ES6
 *           there can be only one constructor in a class 
 *              Syn :   
 *                      class ClassName{
 *                              // properties and methods
 *                       }
 *      objects
 *      encapsulation
 *      inheritance
 *      polymorphism    
 *      abstraction
 */
// function Car(name, engine) {
//     this.name = name;
//     this.engine = engine;
// }
// Car.prototype.getDetails = function () {
//     console.log(`Car Name is ${this.name} and Engine Type is ${this.engine}`);
// }
// let car = new Car("Volkswagen", "1.5TSI");
// car.getDetails();

// let car2 = new Car("Skoda", '1.0TSI');
// car2.getDetails();

class Car {
    // properties 
    name;
    engine;
    // use to assing values to properties
    constructor(name, engine) {
        this.name = name;
        this.engine = engine;
    }
    // method
    getDetails() {
        console.log(`Car Name is ${this.name} and Engine Type is ${this.engine}`);
    }
}

let car1 = new Car("Volkswagen", "1.5TSI");
car1.getDetails();
console.log(car1.name);
console.log(car1.engine);


class Student {
    studentName;
    studentId;
    studentBranch;

    constructor(studentName, studentId, studentBranch) {
        this.studentBranch = studentBranch;
        this.studentId = studentId;
        this.studentName = studentName;
    }

    coding() {
        console.log(`${this.studentName} is coding javascript or python`);
    }

    playing() {
        console.log(`The Student With Id : ${studentObj1.studentId} is playing cards`);
    }

    drinkTeaOrCoffee() {
        console.log(`Baga alisipoyi tea tagutunna ${this.studentName}`);
    }

}

let studentObj1 = new Student("Bharath", 101, "ML and AI");
let studentObj2 = new Student("Anand", 102, "CSE");
let studentObj3 = new Student("Ishawarya", 103, "AI and ML");
studentObj3.studentName = "Ishwarya";
studentObj1.coding();
studentObj3.drinkTeaOrCoffee();
studentObj2.playing();


// Inheritance

class Animal {
    eyes;
    color;
    sounds;
    legs;
    tail;
    constructor(eyes, color, sounds, legs, tail) {
        this.eyes = eyes;
        this.color = color;
        this.sounds = sounds;
        this.legs = legs;
        this.tail = tail;
    }
    eating() {
        console.log("Animal is Eating");
    }
    sleeping() {
        console.log("Animal is Sleeping");
    }
    hunting() {
        console.log("Animal is hunting");
    }
}

class Cat extends Animal {
    name;
    food;
    breed;
    constructor(eyes, color, sounds, legs, tail, food, breed, name) {
        super(eyes, color, sounds, legs, tail);
        this.food = food;
        this.breed = breed;
        this.name = name;
    }
    eating() {
        console.log(`${this.name} is eating ${this.food}`);
    }
    sleeping() {
        console.log(`${this.name} is sleeping for 16 hours`);
    }
    hunting() {
        console.log(`${this.name} is hunting for cat food`);
    }
}
console.clear();
let cat = new Cat("black color eyes",
    "white", "meow", "4 legs", "available", "cat food", "bengal cat", "ino");

console.log(cat);
cat.sleeping();
cat.eating();
cat.hunting();

class Dog extends Animal {
    name;
    food;
    breed;
    constructor(eyes, color, sounds, legs, tail, food, breed, name) {
        super(eyes, color, sounds, legs, tail);
        this.food = food;
        this.breed = breed;
        this.name = name;
    }
    eating() {
        console.log(`${this.name} is eating ${this.food}`);
    }
    sleeping() {
        console.log(`${this.name} is sleeps 8 hours`);
    }
    hunting() {
        console.log(`${this.name} is hunting for dog food`);
    }
}

let dog1 = new Dog("brown color", "brown", "bow bow",
    "4 legs", "available", "bones", "husky", "chimtu");
console.log(dog1)
dog1.eating();
dog1.sleeping();
dog1.hunting();


// Encapsulation

class Employee {
    #employeeName;
    #employeeId;
    #employeeSalary;
    constructor(employeeId, employeeName, employeeSalary) {
        this.#employeeId = employeeId;
        this.#employeeName = employeeName;
        this.#employeeSalary = employeeSalary;
    }
    get getEmployeeName() {
        return this.#employeeName;
    }
    set setEmployeeName(name) {
        this.#employeeName = name;
    }
}
console.clear();
let tcsHr = new Employee(100, "Raghu", 20000);
console.log(tcsHr); // dell hr
console.log(tcsHr.getEmployeeName);
tcsHr.setEmployeeName = "Raghu Krishna";
console.log(tcsHr.getEmployeeName);