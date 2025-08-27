import React,{useState,useEffect} from 'react'



export default function Dong2() {
    const [state,setState]=useState({
        a:{
            b:1
        }
    })

    useEffect(()=>{
        setTimeout(()=>{
            //state.a.b=2//引用地址同一个，不会更新
            setState({
                a:{
                    b:2
                }
            })
        },2000)
    },[])



  return (
    <div>我是Dong2组件{state.a.b}</div>

  )
}
