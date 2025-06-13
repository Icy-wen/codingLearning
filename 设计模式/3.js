//判断自己是否已经被实例化过
class Dog{
    show(){
        console.log("I am a dog"); 
    }
    static getInstance(){
        if(!Dog.instance){
            Dog.instance = new Dog(); //object creatio
             }
             return Dog.instance;
    }  
}
const dog = Dog.getInstance(); //object creatio
const dog2 = Dog.getInstance(); //object creatio