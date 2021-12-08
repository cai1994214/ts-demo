
//基本类型

//number;
let n: number;
n = 10;
console.log(n);
//string;
let s: string;
s= '1';
console.log(s);
//boolean;
let b: boolean;
b = true;
console.log(b)
//字面量 联合数据类型 string | number | boolean
let text : string | number | boolean;
text = 10;
text = '联合数据'
console.log(text)
//any
let a: any;
a=1;
a='s';
a=true;
console.log(a)
//未知类型
let u: unknown;
let s1: string;
// s1 = a; //any可以赋值 不報錯
// s1 = u;//unknown 类型的不能赋值 

//类型断言 可以用来告诉解析器变量的实际类型
s1 = u as string;
s1 = <string>u;

function fn(): void {
    
}
//引用类型

