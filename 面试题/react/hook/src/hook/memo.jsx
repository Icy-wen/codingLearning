import React, { useState, useEffect, memo, useCallback ,useMemo} from 'react'



const Child = memo(function Child({ count, callBack }) {

    console.log('child render');
    return (
        <div><h2>{count}</h2></div>
    )
})



export default function Memo() {
    const [n, setN] = useState(0)
    const [count, setCount] = useState(2)

    useEffect(() => {
        setInterval(() => {
            setN(Math.random())
        }, 2000)
    }, [])
    const cb = useCallback(() => {
    }, [])
    const count2 = useMemo(() => {
        return count * 2
    }, [count])
    return (
        <div>
            <h1>{n}</h1>
            <Child count={count2} callBack={cb} />
        </div>
    )
}
