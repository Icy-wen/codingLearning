const arr=[1,[2,[3,4]]]

console.log(arr.flat(Infinity));

function flatten(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }

    }
    return res

}

function flatten2(arr){
    return arr.toString().split(',').map((item)=>{
        return Number(item)
    })
}


function flatten3(arr){
    arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?flatten3(cur):cur)
    },[])
}

function flatten4(arr){
    while(arr.some((item)=> Array.isArray(item))){
        arr=[].concat(...arr)
    }
    return arr

}
