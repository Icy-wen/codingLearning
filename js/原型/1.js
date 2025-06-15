let obj = {
    name: '张三',
    age: 18,

}
function Car(){
    this.color = 'red';
}
console.log(obj.__proto__);//[Object: null prototype] {}
console.log(obj.__proto__ === Object.prototype);//true
obj=new Car();//obj.__proto__=Car.prototype;
console.log(obj.__proto__ === Car.prototype);//true