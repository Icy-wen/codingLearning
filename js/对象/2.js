//原始类型不能添加属性和方法
var num = 10;//new Number(10);
num.a='a';
//delete num.a;
console.log(num.a);//undefined

//num 为对象
var num = new Number(10);
num.a='a';
console.log(num.a);// a

var arr=[1,2,3];//new Array(1,2,3);
arr.length=1;
console.log(arr);//[1]

var string='abc';//new String('abc');
string.length=1;//添加一个length属性
//delete string.length;
console.log(string.length);//3
console.log(string);//abc