import { useState ,useEffect} from 'react'


export default function Trap() {
    const [count, setCount] = useState(6)
    // useEffect(() => {
    //     //引入了count
    //     //执行一次后销毁，闭包保留count
    //     setInterval(() => {
    //         setCount(count + 1)//拿的是闭包的值，不会修改闭包的值,只会修改全局的count，重复执行0+1

    //     }, 1000)
    // }, [])
    useEffect(() => {
        setInterval(() => {
            setCount((count)=>{
                return count + 1
            })//形参
        }, 1000)
    }, [])

  return (
    <div>
        {count}
    </div>
  )
}
