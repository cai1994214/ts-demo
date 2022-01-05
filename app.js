"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    sayHello() {
        console.log('汪汪汪');
    }
}
class Cat extends Animal {
    sayHello() {
        console.log('咪咪咪');
    }
}
const dog = new Dog('狗', 15);
const cat = new Cat('猫', 19);
console.log(dog.sayHello());
console.log(cat);
const obj = {
    name: 'ss',
    age: 15,
    gender: 'asda'
};
