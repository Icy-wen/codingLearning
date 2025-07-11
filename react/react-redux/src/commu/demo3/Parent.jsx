
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'
export default function Parent() {
const [list, setList] = useState([])

  return (
    <div>
        <Child1 setList={setList}/>
        <Child2 list={list}/>  
    </div>
  )
}