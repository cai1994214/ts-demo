// var message: string = 'Hello, world1111';
// console.log(message)
// class Site {
//     name(): void {
//         console.log("Runoob")
//     }
// }
// var obj = new Site();
// obj.name();

// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// let decLiteral: number = 6;

// let name: string = 'Runoob';
// let years: number = 5;

// //boolean类型
// let falg: boolean = true;

// //数字数组类型
// let arr: number[] = [1, 2];
// let arr1: Array<number> = [1, 2, 3, 4]
// //元组
// let x: [string, number];
// x = ['Runoob', 1];
// // x = [1, 'Runoob']; //报错
// console.log(x[0]);
// //枚举
// enum Color { Red, Green, Blue };
// let c: Color = Color.Blue;
// console.log(c)
// //void
// function Hello(): void {
//     console.log('这是一个没有返回值的函数')
// }
// Hello();
// //Any类型
// let x1: any = 4;
// x1 = 'i am string';
// console.log(x1);
// x1 = false;
// console.log(x1);

// let arr2: any = [1, '2', false];
// console.log(arr2[2])

// let num: number;
// num = 1;
// num = undefined; //报错
// num = null; //报错

// let num1: number | null | undefined;
// num1 = 1;
// num1 = undefined;
// num1 = null; 

// let x: never;
// let y: number;

// x = 123; //数字不能转never
// x = (() => { throw new Error('exception') })(); // never => never 可以赋值
// y = (() => { throw new Error('exception') })(); // never => number (never可以赋值number)

//类型转化
// var str = '1';
// var str2: number = <number> <any> str
// console.log(str2)

// var global_num = 12;
// class Numbers {
//     num_val = 13;
//     static sval = 10;

//     storeNum(): void {
//         var local_num =14;
//     }
// }
// console.log('全局变量'+ global_num);
// console.log('静态'+ Numbers.sval);
// var obj = new Numbers();
// console.log('实例变量'+ obj.num_val);

// var num1: number = 10;
// var num2: number = 2;
// var res: number = 0;

// res = num1 + num2;
// console.log('加', res);

// var num:number = 5; 
// var i:number; 
// var factorial = 1; 

// for(i = num;i>=1;i--) {
//    factorial *= i;
// }
// console.log(factorial)

// var j: any;
// var n: any = "a b c";
// for(j in n) {
//     console.log(n[j])
// }

// function buildName(firstName: string, lastName: string) {
//     return firstName + lastName
// }
// console.log(buildName('Bob'));
// console.log(buildName('1', '2', '3'))
// console.log(buildName('1', '2'))

// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + '' + restOfName.join('')
// }
// console.log(buildName('1','2','3','5'));

// function addNmubers(...nums: number[]) {
//     var i;
//     var sum: number = 0;
//     for (i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     console.log('和' + sum)
// }
// addNmubers(1, 2, 3);
// addNmubers(10, 10, 10, 10, 10);

// var res = function() {
//     return 'hello world';
// }
// console.log(res())

// function disp(s1: string): void;
// function disp(n1:number, s1:string): void;

// var multi:any[] = [[1,2,[3]],[23,24,[25]]]  
// console.log(multi[0][2][0])

// function disp():string[]{
//     return new Array('1', '2', '3');
// }
// var sites:string[] = disp();
// for(var i in sites) {
//     console.log(sites[i]);
// }

// let mymap = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
// ]);


// console.log(mymap)

// var val: string | Number
// val = 12;
// let d: unknown;
// d = true;


// export const Test =  { }