const arr=[{
    name:'张三',
    age:18,
    sex:'男'
},
{
    name:'张三',
    age:18,
    sex:'男'
},{
    name:'张三',
    age:19,
    sex:'男'
}
]

function unique(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let has=true;
        for(let j=0;j<res.length;j++){
            if(equal(arr[i],res[j])){
                has=false;
                break
            }   
        }
        if(has){
                res.push(arr[i])
            }
    }
    return res
}

function equal(obj1,obj2){
    if((typeof obj1==='object'&&obj1!==null)&&(typeof obj2==='object'&&obj2!==null)){
        let obj1Keys=Object.keys(obj1)
        let obj2Keys=Object.keys(obj2)
        if(obj1Keys.length!==obj2Keys.length){
            return false
        }
        for(let key in obj1){
            if(key in obj2){
                if(!equal(obj1[key],obj2[key])){
                    return false
                }
            }else{
                return false
            }
        }
        return true
    }else{
        return obj1===obj2
    }
}

console.log(unique(arr));

