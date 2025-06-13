//判断自己是否已经被实例化过
class Dog{
    show(){
        console.log("I am a dog"); 
    } 
}
Dog.getInstance = (function(){ 
    //闭包
    let instance = null; //闭包
    return function(){
        if(!instance){
            instance = new Dog(); //object creatio
        }
        return instance;
    }
})()
const dog = Dog.getInstance(); //object creatio
const dog2 = Dog.getInstance(); //object creatio