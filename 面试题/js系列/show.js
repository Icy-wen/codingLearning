obj={
    name:'张三',
    age:18
}


function shallowCopy(obj){
    let newObj={}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key]
        }
    }
    return newObj
}

let newObj=shallowCopy(obj);
console.log(newObj);

