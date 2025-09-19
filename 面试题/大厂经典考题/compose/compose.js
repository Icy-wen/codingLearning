let middlewares = []

middlewares.push((ctx,next)=>{
    console.log('111')
    next()
    console.log('222')
})

middlewares.push((ctx,next)=>{
    console.log('333')
    next()
    console.log('444')
})

let fn=compose(middlewares)
fn()

function compose(middlewares){
    return function fn(context){
        //出口
        if(i>=middlewares.length) return
        function dispatch(i){
            const nextFn=()=>{
                dispatch(i+1)
            }
            middlewares[i](context)
        }
        dispatch(0)
    }
}

