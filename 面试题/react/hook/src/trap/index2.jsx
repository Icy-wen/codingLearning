import { useState,useEffect,useReducer } from 'react'


export default function Trap2() {
    const [count,dispatch] = useReducer(reducer,0)

    function reducer(state,action){
        switch(action.type){
            case 'add':
                return state + action.num

            default:
                return state
        }
    }

    useEffect(() => {
        setInterval(() => {
            dispatch({type:'add',num:10})
        }, 1000)
    }, [])

  return (
    <div>
        {count}
    </div>
  )
}
