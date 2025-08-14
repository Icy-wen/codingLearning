const arr = [100, 90, 80, 70, 60]



Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this)
    }
}

Array.prototype.myMap = function (callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i],i,this))
    }
    return newArr
}
Array.prototype.myFilter = function (callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            newArr.push(this[i])
        }
    }
    return newArr
}
Array.prototype.myEvery = function (callback) {   
    for (let i = 0; i < this.length; i++) {
        if(!callback(this[i],i,this)){
            return false
        }       
    }
    return true
     
}
Array.prototype.mySome = function (callback) {   
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            return true
        }
       
    }
     return false 
}
Array.prototype.myReduce = function (callback,...arg) {
    let pre,start=0
    arg.length? pre = arg[0] : (pre = this[0],start = 1)
    for (let i = start; i < this.length; i++) {
        pre = callback(pre,this[i],i,this)
    }
    return pre
}


arr.myMap((item)=>{
    console.log(item)
})

arr.filter((item)=>{
    return item > 50
})

arr.every((item)=>{
    return item > 50
})
arr.reduce((pre,cur)=>{
    return pre + cur
},0)

