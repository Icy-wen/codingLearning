import React from 'react'
import { useRef} from 'react'
export default function Child1({setList}) {

const inputRef = useRef(null)

  const handler = () => {
    setList((preList)=>{
        return [...preList,inputRef.current.value]
    })
  }
  return (
     <div className="hd">
        <input type="text" ref={inputRef}/>
        <button onClick={handler}>确认</button>
      </div>
  )
}
