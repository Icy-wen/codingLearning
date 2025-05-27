// 1. 全局作用域
var a = 1;

//2. 函数作用域
function foo() {
    var b = 2;
    console.log(b);
}

foo();
console.log(a);
// 3. 块级作用域
if (true) {
    let c = 3;
    console.log(c);
}
//console.log(c);
// var let const 的区别
// 1. var 声明的变量会挂载到全局对象上
//console.log(window.a);//浏览器执行

// 2. let const声明的变量不能重复声明
let b = 4;
//let b = 4;
console.log(b);


//3. let const 不存在声明提升
function foo1(){
    console.log(up);
    var up= 6;

}
foo1();//undefined  声明提升
function foo2(){
    console.log(up);
    let up= 6;

}
foo2();// Cannot access 'up' before initialization

//4. const 声明的变量值不能被修改
const d = 5;
//d=6;
