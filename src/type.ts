
//基本类型

//number;
// let n: number;
// n = 10;
// console.log(n);
//string;
// let s: string;
// s= '1';
// console.log(s);
//boolean;
// let b: boolean;
// b = true;
// console.log(b)
//字面量 联合数据类型 string | number | boolean
// let text : string | number | boolean;
// text = 10;
// text = '联合数据'
// console.log(text)
//any
// let a: any;
// a=1;
// a='s';
// a=true;
// console.log(a)
//未知类型
// let u: unknown;
// let s1: string;
// s1 = a; //any可以赋值 不報錯
// s1 = u;//unknown 类型的不能赋值 


//类型断言 可以用来告诉解析器变量的实际类型
// s1 = u as string;
// s1 = <string>u;

//引用类型

// function fn(): void {
    
// }



//对象
//加上一个?表示 值是可选的
// let b: {name: string, age?: number};
// b = {name: '12', age: 12}
//除了name, 任意属性都可以加
// let c: {name: string, [propName: string]: any};
// c = {name: '猪八戒',age: 18, gender: '男'};


//函数 通过箭头函数定义
// let d: (a:number, b:number) => number;

// d = function (n1:number, n2:number) {
//     return n1 + n2;
// }

// 数组 两种方式声明 类型[] Array<类型>
// let e: string[];
// e = ['1', 'b', 'c'];
// let f: number[];
// f = [1, 2, 3]
// let g: Array<any>;

//元组 就是固定长度的数组
// let h: [string, number];
// h = ['a', 1];
// console.log(h);

//enum 枚举
// enum Gender {
//     Male,
//     Female
// }
// let i: { name: string; gender: Gender };
// i = {
//   name: "孙悟空",
//   gender: Gender.Male,
// };
// console.log(i.gender === Gender.Male);

//&表示同时
// let j: {name: string } & {age: number};
// j = {
//     name: 'as',
//     age: 18
// }

//类型的别名 type 名字 = 类型
type myType = string;
let m: myType;


let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
//这样写太繁琐

type myType1 = 1 | 2 | 3 | 4 | 5;
let k1: myType1;
let l1: myType1;
k1 = 2;
k1 = 3;
console.log(k1);
console.log(k1+1);

// export const h = 'demo';