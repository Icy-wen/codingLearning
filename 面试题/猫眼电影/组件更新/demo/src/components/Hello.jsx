import { useState, memo, useRef, useMemo, useEffect } from 'react'

const Child = memo(function({ count }) {  // 已经将 Child 组件的 vDOM 缓存起来了
  console.log('Child 组件渲染了');

  const doublecount = useMemo(() => {
    return count * 2
  }, [count])


  return (
    <div>
      <h1>Child -- {doublecount}</h1>
    </div>
  )
})

export default function Hello() {
  const [count, setCount] = useState(() => {
    return 100
  })
  const [obj, setObj] = useState({
    name: '张三',
    age: 18
  })

  useEffect(() => {
    let _count = count
    setInterval(() => {
      setCount(_count + 1)
    }, 1000)
  }, [])


  let obj2 = useRef({
    name: '李四',
    age: 20
  })

  return (
    <div>
      <div>Hello</div>
      <div onClick={() => setCount(count + 1)}>当前计数：{count}</div>
      <Child count={count} />
      <a href="https://www.baidu.com" target='abc'>跳转</a>
    </div>
  )
}
