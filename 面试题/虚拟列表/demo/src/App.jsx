import React, { useEffect, useRef } from 'react'
import './app.css'
import { useState} from 'react'
const listData=new Array(1000).fill(0).map((item,index)=>{
    return {id:index,val:index}
})
export default function App() {
  const [startOffset,setStartOffset]=React.useState(0)//占位容器的偏移距离
  const [startIndex,setStartIndex]=React.useState(0)//起始索引
  const [endIndex,setEndIndex]=React.useState(0)//结束索引
  useEffect(()=>{
    setEndIndex(startIndex+visibleCount)
  },[startIndex])
  const listRef=useRef()
  //总列表高度
  const listHeight=listData.length*50
  //可以展示的列表数量
  const visibleCount=Math.ceil(500/50)
  //上方偏移量对应的style
  const getTransform={
    transform:`translateY(${startOffset}px)`
  }
  //截取数据用于展示
  const visibleData=listData.slice(startIndex,Math.min(endIndex,listData.length))
  //滚动事件
  const scrollEvent=()=>{
    const scrollTop=listRef.current.scrollTop
    //重新计算起始下标
    setStartIndex(Math.floor(scrollTop/50))
    //重新计算偏移量
    setStartOffset(scrollTop-(scrollTop%50))
  }
  return (
    <div className='container' onScroll={scrollEvent} ref={listRef}>
      <div className="list-phantom" style={{height:listHeight}}>

      </div>
      <div className="list">
        <ul>
          {
            visibleData.map(item=>(
              <li key={item.id} style={getTransform}>{item.val}</li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}
