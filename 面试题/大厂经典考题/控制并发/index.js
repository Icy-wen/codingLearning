function ajax(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            if(time>5000){
                reject()
            }
            resolve()
        },time)
    })
}

class Limit{
    constructor(parallCount=2){
        this.task=[]//this->new
        this.parallCount=parallCount
        this.runningCount=0
    }
    add(task){//this->被调用
        return new Promise((resolve,reject)=>{
            this.task.push({
                task,
                resolve,
                reject

            })
            this._run()
        })
    }
    _run(){
        if(this.runningCount<this.parallCount&&this.task.length){
            const {task,resolve,reject}=this.task.shift()//promise存

            this.runningCount++
            task().then(resolve,reject).finally(()=>{
                this.runningCount--
                this._run()
            })


        }

    }

}

const limit=new Limit(2)
// limit.add(()=>ajax(1000))
// limit.add(()=>ajax(2000))
// limit.add(()=>ajax(3000))
// limit.add(()=>ajax(4000))
// limit.add(()=>ajax(5000))
// limit.add(()=>ajax(6000))
function addtask(time,name){
    limit.add(()=>ajax(time)).then(()=>{
        console.log(`任务${name}完成`);
    }).catch(()=>{
        console.log(`任务${name}失败`);
    })
}

addtask(6000,'1')
addtask(2000,'2')
addtask(3000,'3')
addtask(4000,'4')
addtask(5000,'5')
addtask(6000,'6')
