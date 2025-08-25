import React, { useState, useEffect } from 'react'


export default function Effect() {

  const [temp, setTemp] = useState(0)
  const [suggestions, setSuggestions] = useState('长袖')
  const add = () => {
    setTemp(temp + 5)

  }
  useEffect(() => {
    if (temp > 30) {
      setSuggestions('短袖')
    }
  }, [temp])

  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={() => setTemp(temp - 1)}>minus</button>
      <div>温度：{temp}</div>
      <div>
        建议穿衣：
        {
          suggestions
        }
      </div>
    </div>
  )
}
