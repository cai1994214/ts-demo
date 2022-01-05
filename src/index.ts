import { h } from './m'

function sum(a: number, b: number): number {
    return a + b;
}

const obj = {name: '测试',age: 33};
console.log(obj);
obj.age = 18;
console.log(obj);

let arr: Array<number> = [1,2,3,4];
let arrs = arr.map(e=>e*2);
console.log(arrs);

console.log(Promise);

console.log(sum(2, 4))
console.log(h)