import { useState, createContext, useContext } from "react"
const myConText = createContext()


function B() {
  const msg = useContext(myConText)
  return <div>
    <h3>BBBB --- {msg}</h3>
  </div>
}

function A() {
  const msg = useContext(myConText)
  return <div>
    <h2>AAAA --- {msg}</h2>
    <B />
  </div>
}

export default function index() {
  const [msg, setMsg] = useState("Index 组件中的数据")

  return (
    <div>
      <myConText.Provider value={msg}>
        <A />
      </myConText.Provider>
    </div>
  )
}
