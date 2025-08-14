let obj={
    name:'张三',
    age:18,
    sex:'男'
}

function deepClone(obj){
    const {port1,port2}=new MessageChannel()
    port1.postMessage(obj)
    return new Promise((resolve)=>{
        port2.onmessage=(e)=>{
            resolve(e.data)
        }
    })

}

deepClone(obj).then((res)=>{
    console.log(res);
})


