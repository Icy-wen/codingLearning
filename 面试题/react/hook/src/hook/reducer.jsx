import React, { useReducer } from 'react'


export default function Reducer() {
  const [res,dispatch] = useReducer(reducer,{result:20,suggestions:'长袖'})

  function reducer(state,action){
    switch(action.type){
      case 'add':
        return {
          result:state.result+5,
          suggestions:state.result+5>30?'短袖':'长袖'
        }
      case 'minus':
        return {
          result:state.result-5,
          suggestions:state.result-5<20?'长袖':'短袖'
        }

      default:
        return state
    }
  }
  return (
    <div>
      <button onClick={()=>dispatch({type:'add'})}>add</button>
      <button onClick={()=>dispatch({type:'minus'})}>minus</button>
      <div>{res.result}</div>
      <div>{res.suggestions}</div>
    </div>
  )
}
