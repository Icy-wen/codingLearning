function usePrevious(value){
    const oldValue=useRef(value)
    useEffect(()=>{
        oldValue.current=value
    },[value])//异步
    return oldValue.current
}