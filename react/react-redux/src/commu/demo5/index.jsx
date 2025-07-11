
import { useSelector ,useDispatch} from 'react-redux'

import {useRef} from 'react'
import {addList} from '../../store/modules/counterStore.js'

export default function index() {
    const inputRef = useRef(null)
  const {list} = useSelector((state)=>{
    return state.counter
  })
  const dispatch = useDispatch()
  const addCount = () => {
    const val=inputRef.current.value

    dispatch(addList(val))

  }
  
  return (
    
    <div>
        <input type="text" ref={inputRef}/>
      <button onClick={()=>{addCount()}}>添加</button>
      <ul>
        {
          list.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
