let obj = {

}

function deepCopy(obj){
    let newObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
            if(typeof obj[key] === 'object'&& typeof obj[key]!==null){
                newObj[key] = deepCopy(obj[key])
            }else{
                newObj[key] = obj[key]
            }
        }
    }
    return newObj;
}