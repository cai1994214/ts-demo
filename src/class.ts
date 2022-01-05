// abstract class Animal {//abstract 抽象类 不能用来创建对象
//     name: string;
//     age: number;
//     constructor(name: string, age:number) {
//         this.name = name;
//         this.age = age;
//     }

//     abstract sayHello():void;
// }

// class Dog extends Animal {
//     sayHello(){
//         console.log('汪汪汪')
//     }
// }

// class Cat extends Animal {
//     sayHello(){
//         console.log('咪咪咪')
//     }
// }
// const dog = new Dog('狗', 15);
// const cat = new Cat('猫', 19);

// console.log(dog.sayHello());
// console.log(cat);

// type myType = {
//     name: string,
//     age: number
// }

// interface myInterface {
//     name: string,
//     age: number
// }

// interface myInterface {
//     gender: string
// }

// const obj: myInterface = {
//     name: 'ss',
//     age: 15,
//     gender: 'asda'
// }

// interface myInter {
//     name: string,
//     sayHello(): void,
// }

// class MyClass implements myInter {
//     name
//     constructor(name:string){
//         this.name = name
//     }
//     sayHello(): void {
        
//     }
// }


// class Person {
//     _name: string;
//     _age: number;

//     constructor(name:string, age:number) {
//         this._name = name;
//         this._age = age;
//     }

//     get name(){
//         return this._name
//     }

//     set name(val:string) {
//         this._name = val;
//     }
// }


// const per = new Person('孙悟空', 15);

// per.name = '猪八戒'
// console.log(per)


function fn<T>(a: T): T {
    return a;
}

console.log(fn(10));
console.log(fn<string>('hello'));


function fn2<T,K>(a:T, b:K):T{
    return a
}

interface Inter {
    length: number;
}
function fn3<T extends Inter> (a: T): number {
    return a.length
}

fn3({length: 20})