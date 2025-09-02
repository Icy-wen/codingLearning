class MyPromise {
    constructor(executor) {
        this.state = 'pending'//状态
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (val) => {
            if (this.state == 'pending') {
                this.state = "fulfilled"
                //把then中的函数取出来执行
                this.onFulfilledCallbacks.forEach(fn => fn(val))
            }
        }
        const reject = (res) => {
            if (this.state == 'pending') {
                this.state = "rejected"
                this.onRejectedCallbacks.forEach(fn => fn(res))
                
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled,onRejected) {
         
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val//不报错
        onRejected = typeof onRejected === 'function' ? onRejected : res => { throw res }
        //默认返回一个新的promise对象
        const newPromise = new MyPromise((resolve, reject) => {
            if(this.state === 'fulfilled') {
                setTimeout(()=>{
                    try{
                        const res = onFulfilled()//返回值
                        resolve(res)
                    }catch(err){
                        reject(err)
                    }
                },0)//模拟异步
            } 
            if(this.state === 'rejected') {
                setTimeout(()=>{
                    try{
                        const res = onRejected()//返回值
                        resolve(res)
                    }catch(err){
                        reject(err)
                    }
                },0)//模拟异步
            } 
            //onFulfilled 被存起来 
            if(this.state === 'pending') {
                this.onFulfilledCallbacks.push((val)=>{
                    setTimeout(()=>{
                        try{
                            const res = onFulfilled(val)//返回值
                            resolve(res)
                        }catch(err){
                            reject(err)
                        }
                        
                    })//模拟异步
                })
                this.onRejectedCallbacks.push((res)=>{
                    setTimeout(()=>{
                        try{
                            const res = onRejected(res)//返回值
                            resolve(res)
                        }catch(err){
                            reject(err)
                        }
                    })//模拟异步
                })
            }         
        })
        return newPromise

    }
    //只能被MyPromise调用
    static race(promises){
        return new MyPromise((resolve,reject)=>{
            for(let promise of promises){
                promise.then((value)=>{
                    resolve(value)
                },
                (reason)=>{
                    reject(reason)
                }
            )
            }

        })
    }
    static all(promises){
        const results=[]
        let count=0;
        return new MyPromise((resovle,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then((value)=>{//保证顺序
                    results[i]=value
                    count++;//保证顺序
                    if(count===promises.length){
                        resovle(results)
                    }
                },
                (reason)=>{
                    reject(reason)
                }
            )
            }
        })
    }
    static any(promises){
        let count=0;
        const reasons=[]
        return new MyPromise((resolve,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then((value)=>{
                    resolve(value)
                },
                (reason)=>{
                    count++;
                    reasons[i]=reason
                    if(count===promises.length){
                        reject(reasons)
                    }
                }
            )
            }
        })
    }
    static resolve(val){
        return new MyPromise((resolve,reject)=>{
            resolve(val)
        })
    }
    static reject(res){
        return new MyPromise((resolve,reject)=>{
            reject(res)
        })
    }
    finally(callback){
        return this.then((value)=>{
            return MyPromise.resolve(callback()).then(()=>{
                return value
            })
        },(reason)=>{
            return MyPromise.reject(callback()).then(()=>{
                throw reason
            })
        })
    }
    static allSettled(promises){
        const results=[]
        let count=0;
        return new MyPromise((resolve,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then((value)=>{
                    results[i]={
                        status:'fulfilled',
                        value
                    }
                    
                },
                (reason)=>{
                    results[i]={
                        status:'rejected',
                        reason
                    }
                    
                }
            ).finally(()=>{
                count++;
                if(count===promises.length){
                    resolve(results)
                }
            })

            }
        })
    }


}
