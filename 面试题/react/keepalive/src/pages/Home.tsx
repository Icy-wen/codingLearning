import React,{useState} from 'react'

export default function Home() {
    const [count,setCount]=useState(0)
    const addCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>增加</button>
    </div>
  )
}
