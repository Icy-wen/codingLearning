JSON.parse(JSON.stringify(obj))

structuredClone(obj) //不能处理函数 symbol bigint



function deepClone(obj){
    let res={}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] ==='object'&&  obj[key]!==null){
                res[key]=deepClone( obj[key])
            }else{
                res[key]=obj[key]
            }
        }
    }
    return res
}