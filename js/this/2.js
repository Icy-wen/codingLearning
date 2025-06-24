

function Cloth(color,size){
    this.color=color;
    this.size=size;
}
const obj1=new Cloth("red","M");
console.log(obj1);
function Cloth2(color,size){
    const instance = {};
    instance.color = color;
    instance.size = size;
    return instance;
}

const obj2=new Cloth2("red","M");
console.log(obj2);

function createCloth(color, size) {
    return { color, size };
}





const obj3= createCloth("red", "M");
console.log(obj3);






const obj = {
    "color": "color",
    "size": "m"
};

function updateCloth(color, size, targetObj) {
    targetObj.color = color;
    targetObj.size = size;
    // 不需要return
}

updateCloth("red", "M", obj);
console.log(obj); // { color: 'red', size: 'M' }