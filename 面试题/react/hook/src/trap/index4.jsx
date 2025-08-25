import { useState ,useEffect,useRef,useLayoutEffect} from 'react'


function useInterval(fn,delay){
    const callbackFn=useRef(fn)
    useLayoutEffect(()=>{//dom更新后执行
        callbackFn.current=fn
    })
    useEffect(()=>{
        const timer = setInterval(() => {
            callbackFn.current()
        }, delay)
        return ()=>{//组件卸载后执行
            clearInterval(timer)
        }
    })
}

export default function Trap() {
    const [count, setCount] = useState(0)
    const updateCount=()=>{
        setCount(count+1)
    }

    const ref=useRef(updateCount)
    ref.current=updateCount//让updateCount重新执行获得最新的值

    
    useEffect(() => {
        const timer = setInterval(() => {
            ref.current()
           //updateCount()
        }, 1000)
        return ()=>{//组件卸载后执行
            clearInterval(timer)
        }
    }, [])

  return (
    <div>
        {count}
    </div>
  )
}
