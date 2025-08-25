import { useState ,useEffect} from 'react'


export default function Trap() {
    const [count, setCount] = useState(6)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count+1)
        }, 1000)
        return ()=>{//组件卸载后执行
            clearInterval(timer)
        }
    }, [count])

  return (
    <div>
        {count}
    </div>
  )
}
